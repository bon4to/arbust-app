package handlers

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"regexp"
	"testing"

	"github.com/DATA-DOG/go-sqlmock"
	"github.com/bon4to/music-review-app/internal/models"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// TestGetUsers provides a unit test for the GetUsers handler. It verifies that
// the handler correctly fetches a list of users from the database and returns
// them as a JSON response with a 200 OK status code. The database interaction
// is mocked to ensure the test is isolated and fast.
func TestGetUsers(t *testing.T) {
	// 1. PREPARE THE TEST: Set up the test environment
	// Set to test mode for cleaner test output.
	gin.SetMode(gin.TestMode)

	// Create a mock SQL database connection and a GORM instance.
	mockDB, mock, err := sqlmock.New()
	if err != nil {
		t.Fatalf("An error '%s' was not expected when opening a stub database connection", err)
	}
	defer mockDB.Close()

	dialector := postgres.New(postgres.Config{
		Conn:       mockDB,
		DriverName: "postgres",
	})
	db, err := gorm.Open(dialector, &gorm.Config{})
	if err != nil {
		t.Fatalf("Failed to open GORM db: %v", err)
	}

	// Instantiate the handler injecting the mocked database.
	h := New(db)

	// 2. DEFINE THE EXPECTATIONS: Define the expected DB interation and result
	// Prepare the mock data that the handler should receive from the database.
	mockUsers := []models.User{
		{Model: gorm.Model{ID: 1}, Username: "user1", Email: "user1@test.com"},
		{Model: gorm.Model{ID: 2}, Username: "user2", Email: "user2@test.com"},
	}

	// Define the exact SQL query expect GORM to execute.
	expectedSQL := `SELECT * FROM "users"`
	rows := sqlmock.NewRows([]string{"id", "username", "email"}).
		AddRow(mockUsers[0].ID, mockUsers[0].Username, mockUsers[0].Email).
		AddRow(mockUsers[1].ID, mockUsers[1].Username, mockUsers[1].Email)

	// Instruct the mock database to return the predefined rows when the expected query is received.
	mock.ExpectQuery(regexp.QuoteMeta(expectedSQL)).WillReturnRows(rows)

	// 3. EXECUTE: Call the handler method
	// Create an HTTP recorder to capture the response and a test context for the request.
	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)

	// Execute the handler method under test.
	h.GetUsers(c)

	// 4. ASSERT: Verify the outcome
	// Convert the mock user data to its expected JSON representation.
	expectedJSON, _ := json.Marshal(mockUsers)

	// Assert that the HTTP status code is 200 OK.
	assert.Equal(t, http.StatusOK, w.Code)
	// Assert that the response body matches the expected JSON.
	assert.JSONEq(t, string(expectedJSON), w.Body.String())

	// 5. VERIFY: Ensure all mock expectations were met
	// This final check ensures that the handler actually performed the database query we expected.
	// If this fails, it means our handler's logic has changed and is no longer calling the database as intended.
	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
	}
}
