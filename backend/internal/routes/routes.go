package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Register sets up the application's HTTP routes on the provided Gin engine.
func Register(r *gin.Engine) {
	// GET /ping responds with {"message": "pong"} to indicate service health.
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
}
