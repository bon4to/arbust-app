package routes

import (
	"github.com/bon4to/music-review-app/internal/handlers"
	"github.com/gin-gonic/gin"
)

// Register sets up the application's HTTP routes on the provided Gin engine.
func Register(r *gin.Engine, h *handlers.Handler) {
	// Ping route for health checks
	r.GET("/ping", h.Ping)
}
