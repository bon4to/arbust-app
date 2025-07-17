package models

import (
	"fmt"

	"gorm.io/gorm"
)

// Review represents a user's review of a music item (either album or track).
// The embedded gorm.Model includes standard fields: ID, CreatedAt, UpdatedAt, and DeletedAt.
type Review struct {
	gorm.Model

	UserID  uint    `gorm:"not null"` // UserID is the foreign key linking the review to its author.
	ItemID  uint    `gorm:"not null"` // ItemID is the foreign key to the reviewed item (track or album).
	Liked   bool    `gorm:"not null"` // Liked indicates if the review has been liked by the user.
	Content string  `gorm:"not null"` // Content contains the full text of the review.
	Rating  float32 `gorm:"not null"` // Rating is a numeric score from 0.0 to 5.0 in 0.5 increments.
}

// BeforeSave ensures that the rating is between 0.0 and 5.0 and is in 0.5 increments.
// It returns an error if the rating is invalid.
func (r *Review) BeforeSave(tx *gorm.DB) (err error) {
	// Prevent float32 errors such as 4.99999... being treated as 5.
	scaled := int(r.Rating*10 + 0.000001)

	if scaled < 0 || scaled > 50 {
		return fmt.Errorf("rating must be between 0.0 and 5.0")
	}
	if scaled%5 != 0 {
		return fmt.Errorf("rating must be in 0.5 increments")
	}
	return nil
}
