const Thumbnail = (props) => {
  const { title, location, id } = props;
  return (
    <div>
      <div className="thumbnail-container">
        {title}
        {location}
      </div>
    </div>
  );
};
export default Thumbnail;
