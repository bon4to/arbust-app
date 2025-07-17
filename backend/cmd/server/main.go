package main

import (
	"log"

	"github.com/bon4to/music-review-app/internal/config"
	"github.com/bon4to/music-review-app/internal/db"
	"github.com/bon4to/music-review-app/internal/models"
	"github.com/bon4to/music-review-app/internal/server"
)

func main() {
	cfg, err := config.LoadConfig()
	if err != nil {
		log.Fatalf("failed to load config: %v", err)
	}

	database := db.Connect(cfg)

	var tables []string
	database.Raw("SELECT tablename FROM pg_tables WHERE schemaname = 'public'").Scan(&tables)
	log.Println("Tables in DB:", tables)

	// AutoMigrate automatically creates or updates the table based on the provided model definition.
	// NOTE: In production, consider using versioned migrations instead.
	if err := database.AutoMigrate(&models.User{}, &models.Item{}, &models.Review{}); err != nil {
		log.Fatalf("AutoMigrate failed: %v", err)
	}

	// The database instance is not directly used here,
	// but initializing it ensures that the connection is successful.
	_ = database

	s := server.New(cfg)

	if err := s.Run(); err != nil {
		log.Fatalf("failed to run server: %v", err)
	}
}
