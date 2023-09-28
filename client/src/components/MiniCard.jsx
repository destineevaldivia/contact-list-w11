import Avatar from "./avatar";

function MiniCard(props) {
  return (
    <div className="minicard">
      <h3>{props.name}</h3>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      <p>{props.notes}</p>
    </div>
  );
}

export default MiniCard;
