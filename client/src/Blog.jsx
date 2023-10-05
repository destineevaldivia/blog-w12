import { useState, useEffect } from "react";
import BlogTable from "./BlogTable";
import AddPostForm from "./Form";

const Blog = () => {
  // Initializing a state variable 'blogPost' which holds an array of blog posts
  const [blogPost, setBlogPost] = useState([]);

  // Defining a function that sends an HTTP GET request to my api endpoint on my server.
  const loadData = () => {
    // console.log("fetching data...");
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        // if successful, update the state variable using the setBlogPost function
        setBlogPost(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data in loadData fnx:", error);
      });
  };
  // Using useEffect hook to run the loadData fxn when the component is first rendered and to updatee it if data changes.
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
