const Thumbnail = ({ location, id, img }) => {
  return (
    <div>
      <div className="thumbnail-container">
        <img src={img} alt="photo" />
        <p>{id}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};
export default Thumbnail;
