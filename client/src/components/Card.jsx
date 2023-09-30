import Contacts from "./Contacts";

function Card(props) {}
return (
        <div className="minicard-body">
        <h3>{props.name}:</h3>
        <p>{props.imgURL}</p>
        <p>phone: {props.phone}</p>
        <p>email: {props.email}</p>
        <p>notes: {props.notes}</p>

)<div>{/* <p>{props.name}</p> */}</div>;
