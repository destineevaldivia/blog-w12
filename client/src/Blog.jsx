import { useState, useEffect } from "react";
import BlogTable from "./BlogTable";
import AddPostForm from "./Form";

const Blog = () => {
  // This is my original state with array of blog posts
  const [blogPost, setBlogPost] = useState([]);

  // Defining a function that makes an HTTP GET request to my api endpoint from my server side
  const loadData = () => {
    // console.log("fetching data...");
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        // if successful, update the blog_post state using the setBlogPost function
        setBlogPost(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data in loadData fnx:", error);
      });
  };
  // Specifies a side effect (loadData) that should occur after the component mounts only
  useEffect(() => {
    loadData();
  }, []);

  console.log(blogPost);

  return (
    <div>
      <h2>Destinees Travel Blog </h2>
      <BlogTable blogPost={blogPost} />
      <AddPostForm loadData={loadData} />
    </div>
  );
};
export default Blog;
