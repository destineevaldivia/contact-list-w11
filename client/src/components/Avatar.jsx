import MiniCard from "./MiniCard";
import Contacts from "./Contacts";

function Avatar({ imgURL, alt }) {
  return (
    <div>
      <img className="circle-img" src={imgURL} alt={alt} />
    </div>
  );
}

export default Avatar;
