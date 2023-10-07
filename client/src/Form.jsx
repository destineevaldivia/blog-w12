import { useState } from "react";
// Responsible for rendering a form to add new blog posts
// Handles form submission and communication with server

const AddPostForm = ({ loadData }) => {
  // 'formData' state variable holds the form input values
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    location: "",
    content: "",
    author: "",
    created_at: "",
    updated_at: "",
  });

  // Handles changes in form input fields
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // Updates 'formData' state by creating a new object with the updated field value
    setFormData((values) => ({ ...values, [name]: value }));
  };

  // Handles the form submission when the "Add new post" button is clicked
  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = JSON.stringify(formData);
    // console.log(payload);

    // Sends a POST request to the server with the 'formData' as JSON data
    fetch("http://localhost:8080/api/home", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
    })
      .then((response) => {
        return response.json();
      })
      .then((dataResponse) => {
        // Calls the 'loadData' function to refresh the blog post list
        loadData();
      })
      .catch((error) => {
        console.log("Error while sending POST request:", error);
      });
  };

  // Renders the form
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title of your post"
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Where were you?"
          />
        </label>
        <label>
          Content:
          <textarea
            type="text"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Tell us about it"
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="your name"
          />
        </label>
        <button type="submit">Add new post</button>
      </form>
    </div>
  );
};
export default AddPostForm;
