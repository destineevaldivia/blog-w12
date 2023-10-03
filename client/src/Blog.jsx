import { useState, useEffect } from "react";
import BlogTable from "./BlogTable";

const Blog = () => {
  // This is my original state with array of blog posts
  const [blogPost, setBlogPost] = useState([]);

  // Specifies a side effect (loadData) that should occur after the component mounts only
  useEffect(() => {
    loadData();
  }, []);

  // Defining a function that makes an HTTP GET request to my api endpoint from my server side
  const loadData = () => {
    // console.log("fetching data...");
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        // if successful, update the blog_post state using the setBlogPost function
        setBlogPost(data);
      })
      .catch((error) => {
        console.error("Error fetching data in loadData fnx:", error);
      });
  };
  console.log(blogPost);
  return (
    <>
      <div>
        <BlogTable key={`blogpost+${blogPost.id}`} blogPost={blogPost} />
      </div>
    </>
  );
};
export default Blog;
