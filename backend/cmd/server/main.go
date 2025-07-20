package main

import (
	"log"

	"github.com/bon4to/music-review-app/internal/config"
	"github.com/bon4to/music-review-app/internal/db"
	"github.com/bon4to/music-review-app/internal/models"
	"github.com/bon4to/music-review-app/internal/server"
)

func main() {
	// Initialize dependencies
	cfg, err := config.LoadConfig()
	if err != nil {
		log.Fatalf("failed to load config: %v", err)
	}

	database := db.Connect(cfg)

	// Perform initial setup
	if err := database.AutoMigrate(&models.User{}, &models.Review{}); err != nil {
		log.Fatalf("AutoMigrate failed: %v", err)
	}

	// Create the server, injecting dependencies
	s := server.New(cfg, database)

	// Run the server
	if err := s.Run(); err != nil {
		log.Fatalf("failed to run server: %v", err)
	}
}
