import { useState, useEffect } from "react";
import Avatar from "./avatar";
import MiniCard from "./MiniCard";

function Contacts() {
  // This is my original state with array of contacts
  const [contacts, setContacts] = useState([]);

  // Defining a function that makes am HTTP GET request to my api endpoint from my server side
  const loadContacts = () => {
    fetch("http://localhost:8080/api/contacts")
      .then((response) => response.json())
      .then((contacts) => {
        // if successful, update the contact state using the setContacts function
        // console.log(contacts);
        setContacts(contacts);
      })
      .catch((error) => {
        console.error("Error fetching data in loadContacts fnx:", error);
      });
  };
  // Specifies a side effect (loading contacts)that should occur after the component mounts
  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div className="contacts-body">
      {contacts.map((contact) => (
        <MiniCard key={`minicard+${contact.id}`} name={contact.name} />
      ))}
      {/* {contacts.map((contact) => (
        <Card
          key={`card+${contact.id}`}
          phone={contact.phone}
          email={contact.email}
          notes={contact.notes}
        />
      ))} */}
      <button> + Add New </button>
    </div>
  );
}

export default Contacts;
