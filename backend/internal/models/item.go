package models

import (
	"fmt"
	"time"

	"gorm.io/gorm"
)

// Item represents a music item, such as an album or track, that can be reviewed by users.
// The embedded gorm.Model includes standard fields: ID, CreatedAt, UpdatedAt, and DeletedAt.
type Item struct {
	gorm.Model

	ItemType    string   `gorm:"not null"` // ItemType indicates the type of the item (e.g., "album" or "track")
	Name        string   `gorm:"not null"` // Name is the name of the item (e.g., album or track title)
	Artist      string   `gorm:"not null"` // Artist is the name of the artist
	ReleaseDate string   `gorm:"not null"` // ReleaseDate is the date when the item was released
	Genre       string   `gorm:"not null"` // Genre is the musical genre of the item
	Description string   `gorm:"not null"` // Description provides additional details about the item
	Reviews     []Review // Reviews represents all reviews associated with the item (one-to-many relationship)
}

func (i *Item) BeforeSave(tx *gorm.DB) (err error) {
	// Ensure that the item type is either "album" or "track"
	if i.ItemType != "album" && i.ItemType != "track" {
		return fmt.Errorf("item type must be either 'album' or 'track'")
	}

	// Ensure that the release date is in a valid format (e.g., YYYY-MM-DD)
	if _, err := time.Parse("2006-01-02", i.ReleaseDate); err != nil {
		return fmt.Errorf("invalid release date format, expected YYYY-MM-DD")
	}

	return nil
}
