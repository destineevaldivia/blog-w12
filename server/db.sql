-- PostgreSQL database dump
CREATE DATABASE travelblog_db;

-- blogpost table
CREATE TABLE blog_post (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  location TEXT NOT NULL,
  content TEXT NOT NULL,
  author VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO blog_post (title, location, content, author)
VALUES 
    ('Birthday trip extended', 'Oaxaca Centro', 'will fill out later', 'Destinee'),
    ('Primavera Sound', 'Barcelona', 'will fill out later', 'Destinee'),
    ('Funemployed', 'Rio De Janeiro', 'will fill out later', 'Destinee');


---
