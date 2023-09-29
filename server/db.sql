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


---
ALTER TABLE contacts
ADD imgURL TEXT;
--
UPDATE contacts
SET imgURL = 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/167483868_339756241041616_6971011997213486120_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yQJkyZs4vwYAX_JP7Cw&_nc_ht=scontent-sea1-1.xx&oh=00_AfDZ2E7Y5d3nhW8gOgxpAjiKnpQKGT3qHuHAkIepM9C7HQ&oe=653AAE26'
WHERE id = 1;

UPDATE contacts
SET imgURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLMAN1dW1NwAJ8eJEKKtQP_Dts9D8T-o3l5ROkJulhl-zDRQm40i264nwOatsX1xDPN5Q&usqp=CAU'
WHERE id = 2;

UPDATE contacts
SET imgURL = 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.18169-9/1934301_17605058170_1833_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=Ii7XRWdvAAcAX9q0Mzm&_nc_ht=scontent-sea1-1.xx&oh=00_AfDKHvehDW7-q_eymtAXsIi_U-4UtD6SobYDYO9D4D4ePw&oe=653D60E0'
WHERE id = 3;

UPDATE contacts
SET imgURL = 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/248945097_10158970927618171_6992148489618074316_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=c2c701&_nc_ohc=N2RldueuXi4AX-Azv2c&_nc_ht=scontent-sea1-1.xx&oh=00_AfB-hKofnDJIYs7vDwSySP42A12NKUiM5X3Yg99QtsOqqQ&oe=651BD165'
WHERE id = 4;

    

