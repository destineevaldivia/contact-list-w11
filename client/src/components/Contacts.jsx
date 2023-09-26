import { useState, useEffect } from "react";
import Card from "./Card";

function Contacts() {
  // This is my original state with array of contacts
  const [contacts, setContacts] = useState([]);
  console.log(contacts);

  const loadContacts = () => {
    fetch("http://localhost:8080/api/contacts/")
      .then((response) => response.json())
      .then((contacts) => {
        setContacts(contacts);
      })
      .catch((error) => {
        console.error("Error fetching data in loadContacts fnx:", error);
      });
  };
  // Fetch contacts data when the component mounts
  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div>
      <h1 className="mainTitle"> My Contacts</h1>
      <Card />
      <button> + Add New </button>
    </div>
  );
}

export default Contacts;
