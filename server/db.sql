-- PostgreSQL database dump
CREATE DATABASE travelblog_db;

-- blogpost table
CREATE TABLE blog_post (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  location TEXT NOT NULL,
  content TEXT NOT NULL,
  author VARCHAR(255),
  remote_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO blog_post (title, location, content, author, remote_url)
VALUES 
    ('Birthday trip extended', 'Mexico', 'On this trip we started in Mexico City, then we went to Oaxaca Centro, Puerto Escondito and San Jose del Pacifico, we celebrated many special occasions like my birthday, day of the dead, and our 1 year anniversary. It was wonderful!', 'Destinee', 'https://github.com/destineevaldivia/blog-w12/blob/07edc9b8483a869ccbeb0d764b83c8196b2d5bd4/client/w12_blog_images/IMG_1580.jpeg'),
    ('Primavera Sound', 'Spain', 'We went to visit Conrads friends in Barcelona, we went to a big music festival called Primavera Sounds, we hung out in the plazas a lot with friends and ate a lot of great food. At some point we ventured off to San Sebastian and then went to southern Portugal for cliff jumping. We also discovered costeering.', 'Destinee', 'https://github.com/destineevaldivia/blog-w12/blob/07edc9b8483a869ccbeb0d764b83c8196b2d5bd4/client/w12_blog_images/IMG_9104.jpeg'),
    ('Funemployed', 'Brazil', 'Poppy, Ajay, Conrad and I had the time of our lives. We started in Sao Paolo, visited many places in between, the last was Rio and we got to experience the infamous Carnaval', 'Destinee', 'client/w12_blog_images/IMG_2243.jpeg');


---

