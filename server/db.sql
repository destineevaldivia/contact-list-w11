-- PostgreSQL database dump
CREATE DATABASE contacts_teletubbies_db;

--contacts table
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY, 
  name TEXT, 
  phone TEXT, 
  email TEXT, 
  notes TEXT 
  );

INSERT INTO contacts (name, phone, email, notes)
VALUES 
    ('Tinky-Winky', '+555 123 4567', 'wink@nobody.com', 'bossy and purple'),
    ('Dipsy', '+555 987 6543', 'nature@girl.com', 'gentle and green'),
    ('Laa-Laa', '+555 333 8811', '123@fake.com', 'cheerful and yellow'),
    ('Po', '+555 222 2020', 'coltranelover@jazz.com', 'soulful and red');
    

