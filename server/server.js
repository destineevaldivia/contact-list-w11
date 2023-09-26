import express, { urlencoded } from "express";
import cors from "cors";
import "dotenv/config";
import db from "./db/db-connection.js";

const app = express();
const PORT = 8080;

// Configuring cors middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// creates an endpoint for the route `/`
app.get("/", (req, res) => {
  res.json("Hello D");
});

//GET request for 'contacts' table in my 'contacts_teletubbies_db' psql database
app.get("/api/contacts/", async (req, res) => {
  try {
    const { rows: contacts } = await db.query("SELECT * FROM contacts");

    res.send(contacts);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//CREATE A POST request
//PUT request
//delete if there's time

app.listen(PORT, () =>
  console.log(`Server running on Port http://localhost:${PORT}`)
);
