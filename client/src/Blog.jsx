import { useState, useEffect } from "react";
// import BlogTable from "./BlogTable";

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
        console.log(data);
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
    blogPost && (
      <div>
        {blogPost.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
        ;
      </div>
    )
  );
};
export default Blog;
