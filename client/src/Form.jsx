import React, { useState, useEffect } from "react";

const AddPostForm = ({ loadData }) => {
  const [data, setData] = useState();
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    location: "",
    content: "",
    author: "",
    created_at: "",
    updated_at: "",
  });
  //   console.log(formData);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  console.log(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ formData });

    //A function to handle the post request

    fetch("http://localhost:8080/api/home", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })
      .then((dataResponse) => {
        setData(dataResponse);
        console.log("From the post ", dataResponse);
        loadData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
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
            placeholder="where were you?"
          />
        </label>
        <label>
          Content:
          <textarea
            type="text"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="your post goes here"
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
