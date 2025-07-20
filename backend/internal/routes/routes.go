package routes

import (
	"github.com/bon4to/music-review-app/internal/handlers"
	"github.com/gin-gonic/gin"
)

// Register sets up the application's HTTP routes on the provided Gin engine.
func Register(r *gin.Engine, h *handlers.Handler) {
	// Ping route for health checks
	r.GET("/ping", h.Ping)

	// Group routes for better organization
	userRoutes := r.Group("/users")
	{
		userRoutes.POST("/", h.CreateUser)      // CREATE a new user
		userRoutes.GET("/", h.GetUsers)         // READ all users
		userRoutes.GET("/:id", h.GetUserByID)   // READ a single user by ID
		userRoutes.PUT("/:id", h.UpdateUser)    // UPDATE a user by ID
		userRoutes.DELETE("/:id", h.DeleteUser) // DELETE a user by ID
	}
}
