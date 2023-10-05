import Thumbnail from "./Thumbnail";

// Accepts the blogPost state as a prop, which contains an array of my data
// Renders a list of blog post thumbnails by mapping through the data and rendering individual thumbnmail components
const BlogTable = ({ blogPost }) => {
  return (
    <>
      <div>
        <div className="thumbnail-container">
          {blogPost.map((item) => (
            <Thumbnail
              key={`thumbnail+${item.id}`}
              title={item.title}
              location={item.location}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default BlogTable;
