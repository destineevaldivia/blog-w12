import BlogTable from "./BlogTable";
import AddPostForm from "./Form";

const Blog = ({ blogPosts, loadData }) => {
  return (
    <div>
      <h2>Destinees Travel Blog </h2>
      <BlogTable blogPosts={blogPosts} />
      <AddPostForm loadData={loadData} />
    </div>
  );
};
export default Blog;
