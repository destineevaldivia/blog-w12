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

// creates an endpoint for the route `/`
app.get("/", (req, res) => {
  res.json("Hello D");
});

//GET request for 'blog_post' table in my 'travelblog_db' psql database
app.get("/api/blog_post/", async (req, res) => {
  try {
    const { rows: blog_post } = await db.query("SELECT * FROM blog_post");

    res.send(blog_post);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on Port http://localhost:${PORT}`)
);
