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
    <div>
      <div className="minicard-body">
        {contacts.map((contact) => (
          <MiniCard
            key={`minicard+${contact.id}`}
            name={contact.name}
            imgURL={contact.imgURL}
          />
        ))}
      </div>

      <div className="form">
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
          />

          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Enter any additional notes"
          ></textarea>

          <input type="submit" value="+ Add New Contact" className="button" />
        </form>
      </div>
    </div>
  );
}
export default Contacts;
