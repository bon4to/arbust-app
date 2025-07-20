package server

import (
	"fmt"

	"github.com/bon4to/music-review-app/internal/config"
	"github.com/bon4to/music-review-app/internal/handlers"
	"github.com/bon4to/music-review-app/internal/routes"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

// Server represents the HTTP server with its routing engine and configuration.
type Server struct {
	engine *gin.Engine    // Gin routing engine
	config *config.Config // Application configuration
}

// New creates and returns a new Server instance configured with routes and middleware.
func New(cfg *config.Config, db *gorm.DB) *Server {
	s := &Server{
		engine: gin.Default(),
		config: cfg,
	}

	// 1. Create the handler, injecting the database dependency.
	h := handlers.New(db)

	// 2. Register the routes, passing both the engine and the handler.
	routes.Register(s.engine, h)

	return s
}

// Run starts the HTTP server on the configured port.
// It blocks the current goroutine and returns an error if the server fails to start.
func (s *Server) Run() error {
	addr := fmt.Sprintf(":%s", s.config.Port)
	fmt.Printf("Server running at http://localhost%s\n", addr)
	return s.engine.Run(addr)
}
