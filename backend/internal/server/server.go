package server

import (
	"fmt"

	"github.com/bon4to/music-review-app/internal/config"
	"github.com/bon4to/music-review-app/internal/routes"
	"github.com/gin-gonic/gin"
)

// Server represents the HTTP server with its routing engine and configuration.
type Server struct {
	engine *gin.Engine    // Gin routing engine
	config *config.Config // Application configuration
}

// New creates and returns a new Server instance configured with routes and middleware.
func New(cfg *config.Config) *Server {
	r := gin.Default()

	// Register application routes.
	routes.Register(r)

	return &Server{
		engine: r,
		config: cfg,
	}
}

// Run starts the HTTP server on the configured port.
// It blocks the current goroutine and returns an error if the server fails to start.
func (s *Server) Run() error {
	addr := fmt.Sprintf(":%s", s.config.Port)
	fmt.Printf("Server running at http://localhost%s\n", addr)
	return s.engine.Run(addr)
}
