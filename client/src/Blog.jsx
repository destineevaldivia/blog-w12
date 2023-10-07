import BlogTable from "./BlogTable";
import AddPostForm from "./Form";

// Accepts the blogPost state as a prop, which contains an array of my data
// Also accepts loadData function
const Blog = ({ blogPosts, loadData }) => {
  return (
    <div>
      <h2>Destinees Travel Blog </h2>
      <BlogTable blogPosts={blogPosts} loadData={loadData} />
      <AddPostForm loadData={loadData} />
    </div>
  );
};
export default Blog;
