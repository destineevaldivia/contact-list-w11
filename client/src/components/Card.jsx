import Contacts from "./Contacts";

function Card(props) {}
return (
  <div>
    <p>{props.name}</p>
    <p>{props.phone}</p>
    <p>{props.email}</p>
    <p>{props.notes}</p>
  </div>
);
