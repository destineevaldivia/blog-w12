const Thumbnail = (props) => {
  const { location, id } = props;
  return (
    <div>
      <div className="thumbnail-container">
        {id}
        {location}
      </div>
    </div>
  );
};
export default Thumbnail;
