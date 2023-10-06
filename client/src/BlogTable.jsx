import Thumbnail from "./Thumbnail";
import IndividualPost from "./IndividualPost";
import { Link } from "react-router-dom";

// Renders a list of blog post thumbnails by mapping through the data and rendering individual thumbnmail components
// Renders IndividualPost as well, decided this was best based on blogPost data passed as prop here
const BlogTable = ({ blogPosts }) => {
  return (
    <>
      <div>
        <div className="thumbnail-container">
          {blogPosts.map((item) => (
            <Link key={`thumbnail+${item.id}`} to={`/blog/${item.id}`}>
              <Thumbnail title={item.title} location={item.location} />
            </Link>
          ))}
        </div>
        <div className="individualpost-container">
          {blogPosts.map((item) => (
            <IndividualPost
              key={`individual+${item.id}`}
              title={item.title}
              location={item.location}
              content={item.content}
              author={item.author}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default BlogTable;
