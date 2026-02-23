-- Admin user seed script
-- Password: admin123 (hashed with bcrypt)
-- Run: npx prisma db execute --file ./prisma/seed-admin.sql

INSERT INTO User (email, password, firstName, lastName, role, isActive, createdAt, updatedAt) 
VALUES (
    'admin@beaulii.com', 
    '$2b$10$rVn0PqZxZGQfQGZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZ', 
    'Admin', 
    'User', 
    'SUPER_ADMIN', 
    true, 
    NOW(), 
    NOW()
) 
ON DUPLICATE KEY UPDATE email = email;
