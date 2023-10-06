import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Blog from "./Blog";
import IndividualPost from "./IndividualPost";

const App = () => {
  // Initializing a state variable 'blogPost' which holds an array of blog posts
  const [blogPosts, setBlogPosts] = useState([]);

  // Defining a function that sends an HTTP GET request to my api endpoint on my server.
  const loadData = () => {
    // console.log("fetching data...");
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        // if successful, update the state variable using the setBlogPost function
        setBlogPosts(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data in loadData fnx:", error);
      });
  };
  // Using useEffect hook to run the loadData fxn when the component is first rendered and to update it if data changes.
  useEffect(() => {
    loadData();
  }, []);

  console.log("inside App.jsx", blogPosts);
  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Blog blogPosts={blogPosts} loadData={loadData} />}
          />
          <Route
            path="/blog/:blogid"
            element={
              <IndividualPost blogPosts={blogPosts} loadData={loadData} />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
