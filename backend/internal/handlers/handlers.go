// Package handlers contains the HTTP handlers for the application,
// which hold the business logic for processing requests.
package handlers

import (
	"net/http"

	"github.com/bon4to/music-review-app/internal/models"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

// Handler holds dependencies for the application's route handlers, such as a database connection.
type Handler struct {
	DB *gorm.DB
}

// New creates and returns a new Handler with its dependencies.
func New(db *gorm.DB) *Handler {
	return &Handler{DB: db}
}

// Ping handles the GET /ping route and is used for health checks.
func (h *Handler) Ping(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "pong",
	})
}

// CreateUserInput defines the data transfer object (DTO) for creating a new user.
// Using a DTO is a best practice for validating request bodies.
type CreateUserInput struct {
	Username string `json:"username" binding:"required"`
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=8"`
	Name     string `json:"name" binding:"required"`
	Lastname string `json:"lastname" binding:"required"`
}

// CreateUser handles the POST /users endpoint. It validates the request body,
// hashes the password, and creates a new user in the database.
func (h *Handler) CreateUser(c *gin.Context) {
	var input CreateUserInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Hash the password before saving for security.
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(input.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}

	user := models.User{
		Username:     input.Username,
		Email:        input.Email,
		PasswordHash: string(hashedPassword),
		Name:         input.Name,
		Lastname:     input.Lastname,
	}

	if err := h.DB.Create(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user"})
		return
	}

	// NOTE: It is a security risk to return the password hash.
	// TODO: A dedicated response DTO must be used to omit sensitive fields.
	c.JSON(http.StatusCreated, user)
}

// GetUsers handles the GET /users endpoint, returning a list of all users.
func (h *Handler) GetUsers(c *gin.Context) {
	var users []models.User
	if err := h.DB.Find(&users).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve users"})
		return
	}
	c.JSON(http.StatusOK, users)
}

// GetUserByID handles the GET /users/:id endpoint, returning a single user by their ID.
func (h *Handler) GetUserByID(c *gin.Context) {
	var user models.User
	id := c.Param("id")

	if err := h.DB.First(&user, id).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve user"})
		return
	}

	c.JSON(http.StatusOK, user)
}

// UpdateUserInput defines the DTO for updating a user's information.
type UpdateUserInput struct {
	Name     string `json:"name"`
	Lastname string `json:"lastname"`
	Bio      string `json:"bio"`
}

// UpdateUser handles the PUT /users/:id endpoint. It finds an existing user,
// validates the input, and updates the user's information.
func (h *Handler) UpdateUser(c *gin.Context) {
	var user models.User
	id := c.Param("id")

	if err := h.DB.First(&user, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	var input UpdateUserInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// GORM's Updates method intelligently updates only the non-zero fields from the input struct.
	h.DB.Model(&user).Updates(input)

	c.JSON(http.StatusOK, user)
}

// DeleteUser handles the DELETE /users/:id endpoint.
// It performs a soft delete if the User model has gorm.DeletedAt.
func (h *Handler) DeleteUser(c *gin.Context) {
	id := c.Param("id")

	result := h.DB.Delete(&models.User{}, id)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete user"})
		return
	}

	// Check if a row was actually affected to confirm the user existed.
	if result.RowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	c.Status(http.StatusNoContent)
}
