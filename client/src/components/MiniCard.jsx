import Avatar from "./avatar";

function MiniCard(props) {
  return (
    <div className="minicard">
      <h3>{props.name}</h3>
      <Avatar imgURL={props.imgURL} />
    </div>
  );
}

export default MiniCard;
