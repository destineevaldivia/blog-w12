-- PostgreSQL database dump
CREATE DATABASE travelblog_db;

-- blogpost table
CREATE TABLE blog_post (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  location TEXT NOT NULL,
  content TEXT NOT NULL,
  author VARCHAR(255),
  photo bytea,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO blog_post (title, location, content, author,)
VALUES 
    ('Birthday trip extended', 'Mexico', 'On this trip we started in Mexico City, then we went to Oaxaca Centro, Puerto Escondito and San Jose del Pacifico, we celebrated many special occasions like my birthday, day of the dead, and our 1 year anniversary. It was wonderful!', 'Destinee', ''),
    ('Primavera Sound', 'Spain', 'will fill out later', 'Destinee'),
    ('Funemployed', 'Brazil', 'will fill out later', 'Destinee');


---

