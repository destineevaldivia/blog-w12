import Thumbnail from "./Thumbnail";
import IndividualPost from "./IndividualPost";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// Renders a list of blog post thumbnails by mapping through the data and rendering individual thumbnmail components
const BlogTable = ({ blogPosts, loadData }) => {
  return (
    <>
      <div>
        <div>
          {blogPosts.map((item) => (
            <Link key={`thumbnail+${item.id}`} to={`/blog/${item.id}`}>
              <Thumbnail location={item.location} src={item.img} />
              <button>delete</button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default BlogTable;
