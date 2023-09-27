import Avatar from "./avatar";

function Card(props) {
  return (
    <div className="card">
      {/* <Avatar imgURL="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/167483868_339756241041616_6971011997213486120_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yQJkyZs4vwYAX_JP7Cw&_nc_ht=scontent-sea1-1.xx&oh=00_AfDZ2E7Y5d3nhW8gOgxpAjiKnpQKGT3qHuHAkIepM9C7HQ&oe=653AAE26"/> */}
      <h3>{props.name}</h3>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      <p>{props.notes}</p>
    </div>
  );
}

export default Card;
