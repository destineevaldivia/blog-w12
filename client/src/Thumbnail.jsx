const Thumbnail = (props) => {
  const { title, location, id } = props;
  return (
    <div>
      <div className="thumbnail-container">
        {id}
        {title}
        {location}
      </div>
    </div>
  );
};
export default Thumbnail;
