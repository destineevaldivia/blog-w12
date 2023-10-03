import express, { urlencoded } from "express";
import cors from "cors";
import path from "path";
import "dotenv/config";
import db from "./db/db-connection.js";

const app = express();
const PORT = 8080;

// Configuring cors middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Creates an endpoint for the route `/`
app.get("/", (req, res) => {
  res.json("Hello D");
});

//GET request for 'blog_post' table in my 'travelblog_db' psql database
app.get("/api/home", async (req, res) => {
  try {
    const { rows: blog_post } = await db.query('SELECT * FROM blog_post');
    console.log("Data fetched successfully:", blog_post);

    res.send(blog_post);
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on Port http://localhost:${PORT}`)
);
