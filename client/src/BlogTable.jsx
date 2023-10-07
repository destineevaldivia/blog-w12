import Thumbnail from "./Thumbnail";
import IndividualPost from "./IndividualPost";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// Renders a list of blog post thumbnails by mapping through the data and rendering individual thumbnmail components
// Renders IndividualPost as well, decided this was best based on blogPost data passed as prop here
const BlogTable = ({ blogPosts, loadData }) => {
  return (
    <>
      <div>
        <div>
          {blogPosts.map((item) => (
            <Link key={`thumbnail+${item.id}`} to={`/blog/${item.id}`}>
              <Thumbnail location={item.location} src={item.img} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default BlogTable;
