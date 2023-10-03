import React from "react";

function Thumbnail(props) {
  return (
    <div>
      {props.updated}
      {props.location}
    </div>
  );
}
export default Thumbnail;
