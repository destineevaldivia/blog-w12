import react from "react";
import { useParams } from "react-router-dom";

const IndividualPost = ({ blogPosts }) => {
  const { blogid } = useParams();
  const post = blogPosts.find((post) => post.id === Number(blogid));

  if (!post) {
    return <div>Post not found..</div>;
  }

  const { title, location, content, author } = post;

  return (
    <div>
      <div className="individual-container">
        <h2>Title: {title}</h2>
        <h4>Location: {location}</h4>
        <p>Content: {content}</p>
        <p>Author: {author}</p>
      </div>
    </div>
  );
};
export default IndividualPost;
