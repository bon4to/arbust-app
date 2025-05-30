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


	// The database instance is not directly used here,
	// but initializing it ensures that the connection is successful.
	_ = database

	s := server.New(cfg)

	if err := s.Run(); err != nil {
		log.Fatalf("failed to run server: %v", err)
	}
}
