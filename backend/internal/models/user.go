package models

import "gorm.io/gorm"

// User represents an application user, identified by a unique username and email.
// The embedded gorm.Model includes standard fields: ID, CreatedAt, UpdatedAt, and DeletedAt.
type User struct {
	gorm.Model

	Username     string   `gorm:"uniqueIndex;not null"` // Username is a unique and required identifier for the user.
	Email        string   `gorm:"uniqueIndex;not null"` // Email is a unique and required contact for the user.
	PasswordHash string   `gorm:"not null"`             // PasswordHash stores the hashed user password for authentication.
	Name         string   `gorm:"not null"`             // Name is the user's given name.
	Lastname     string   `gorm:"not null"`             // Lastname is the user's family name.
	Bio          string   `gorm:"not null"`             // Bio is a brief personal description of the user.
	Reviews      []Review // Reviews represents all reviews authored by the user (one-to-many relationship).
}
