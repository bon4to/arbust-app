package config

import (
	"os"

	"github.com/joho/godotenv"
)

// Config holds the application configuration values,
// including database credentials and server port.
// Use LoadConfig to initialize it.
type Config struct {
	DBUser     string // DBUser is the database username.
	DBPassword string // DBPassword is the database password.
	DBName     string // DBName is the name of the database.
	DBHost     string // DBHost is the hostname of the database server.
	DBPort     string // DBPort is the port number on which the database listens.
	Port       string // Port is the port number on which the application server listens.
}

// LoadConfig loads environment variables into a Config struct.
// It loads values from the ".env" file if present and sets default values as needed.
func LoadConfig() (*Config, error) {
	_ = godotenv.Load(".env") // load .env silently; errors ignored

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	return &Config{
		DBUser:     os.Getenv("POSTGRES_USER"),
		DBPassword: os.Getenv("POSTGRES_PASSWORD"),
		DBName:     os.Getenv("POSTGRES_DB"),
		DBHost:     os.Getenv("POSTGRES_HOST"),
		DBPort:     os.Getenv("POSTGRES_PORT"),
		Port:       port,
	}, nil
}
