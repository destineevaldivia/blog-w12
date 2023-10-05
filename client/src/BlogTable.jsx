import Thumbnail from "./Thumbnail";

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
