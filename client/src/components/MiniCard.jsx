import { useState } from "react";
import Avatar from "./avatar";

function MiniCard(props) {
  const []
  function handleEdit() {
    console.log("clicked edit");
  }
  return (
    <div className="minicard-body">
      <img className="circle-img" src="profile-image.jpg" alt="contact Image" />

      <div className="contact-info">
        <div className="name">{props.name}</div>
        <p>{props.phone}</p>
        <p>{props.email}</p>
        <p>{props.notes}</p>
        <p></p>

        <div className="buttons">
          <button className="button" onClick={handleEdit}>
            Edit
          </button>
          <button className="button">Delete</button>
          <button className="button">View</button>
        </div>
      </div>
    </div>
  );
}

export default MiniCard;
