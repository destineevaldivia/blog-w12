import { useParams } from "react-router-dom";

const IndividualPost = ({ blogPosts, loadData }) => {
  if (!blogPosts) {
    return null;
  }
  const { blogid } = useParams();
  console.log("inside individual post", blogPosts);

  let [result] = blogPosts.filter((post) => post.id == blogid);
  let { title, author, content } = result;
  console.log("result", result);

  return (
    <div>
      <div className="individual-container">Individual Post: {title} </div>
      //
    </div>
  );
};
export default IndividualPost;
