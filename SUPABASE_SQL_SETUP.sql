-- Create candidates table in Supabase
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE candidates (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  status VARCHAR(50) NOT NULL DEFAULT 'pending', -- 'approved', 'rejected', 'pending'
  position VARCHAR(255),
  phone VARCHAR(20),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on email for faster queries
CREATE INDEX idx_candidates_email ON candidates(email);

-- Create index on status for faster filtering
CREATE INDEX idx_candidates_status ON candidates(status);

-- Insert sample approved candidates
INSERT INTO candidates (name, email, status, position) VALUES
('Sarah Johnson', 'sarah.johnson@example.com', 'approved', 'Software Engineer'),
('Mike Chen', 'mike.chen@example.com', 'approved', 'Product Manager'),
('Lisa Park', 'lisa.park@example.com', 'approved', 'Data Scientist');

-- Insert sample rejected candidates
INSERT INTO candidates (name, email, status, position) VALUES
('John Smith', 'john.smith@example.com', 'rejected', 'Frontend Developer'),
('Amy Wong', 'amy.wong@example.com', 'rejected', 'UI Designer'),
('Carlos Rodriguez', 'carlos.rodriguez@example.com', 'rejected', 'DevOps Engineer');

-- Insert sample pending candidates
INSERT INTO candidates (name, email, status, position) VALUES
('Emma Wilson', 'emma.wilson@example.com', 'pending', 'Backend Developer'),
('David Kumar', 'david.kumar@example.com', 'pending', 'QA Engineer'),
('Sophie Martin', 'sophie.martin@example.com', 'pending', 'Business Analyst');

-- View all candidates
SELECT * FROM candidates ORDER BY created_at DESC;

-- View only approved candidates
SELECT * FROM candidates WHERE status = 'approved';

-- View only rejected candidates
SELECT * FROM candidates WHERE status = 'rejected';
