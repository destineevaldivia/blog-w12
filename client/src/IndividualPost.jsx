import { useParams } from "react-router-dom";

const IndividualPost = ({ blogPosts, title, location, content, author }) => {
  const { blogid } = useParams();
  console.log("inside individual post", blogPosts);

  // if (!blogPosts) {
  //   return <div>loading...</div>;
  // }

  // const result = blogPosts.find((post) => post.id == blogid);

  // {blogPosts.find((post) => (
  //   post.id ==blogid
  // ))}
  // }
  // let [result] = blogPosts.filter((post) => post.id == blogid);
  // let { title, author, content } = result;
  // console.log("result", result);

  // const { title, location, content, author } = result;
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
