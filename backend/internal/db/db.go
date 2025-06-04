package db

import (
	"fmt"
	"log"

	"github.com/bon4to/music-review-app/internal/config"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// Connect establishes and returns a connection to the PostgreSQL database using GORM.
// If the connection fails, Connect logs the error and terminates the application.
func Connect(cfg *config.Config) *gorm.DB {
	// Constructing the DSN required by the PostgreSQL driver.
	// Format: host=<host> user=<user> password=<password> dbname=<dbname> port=<port> sslmode=disable
	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		cfg.DBHost, cfg.DBUser, cfg.DBPassword, cfg.DBName, cfg.DBPort,
	)

	// Opening the database connection using GORM with PostgreSQL dialect.
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("failed to connect to DB: %v", err)
	}

	log.Println("Connected to database successfully!")

	// Return the GORM database instance to be used in the application.
	return db
}
