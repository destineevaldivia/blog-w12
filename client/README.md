# Travel Blog Project

Overview: A fullstack app which displays 3 posts about my recent travel. The thumbnails show the location and are clickable so that the user can read the content of the post. It has functionality to add a new post which will render the update on the page as well as in my travelblog databse.

Technology: React, JavaScript / NodeJs,Express,SQLPostgres, React Router

6 components:
App.jsx (parent)- Responsible for making the fetch API call to my server side, and initializing two routes
Blog.jsx (child 1)- Accepts props from parent and renders it's two child components
BlogTable.jsx (grandchild) - Renders a thumbnail of my data and sets up the link for the router to individual post component
Form.jsx (grandchild) - Generates a form so that users can add new blog posts to the thumbnail list, handles the FE and DB side
IndividualPost.jsx (child 2) - Accepts the array of my data to display, as an individual page, using a dynamic URL based on the blog's id.

Database:
Using PostgresSQL. See bd.sql file for the schema.
