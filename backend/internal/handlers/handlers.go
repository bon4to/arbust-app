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

