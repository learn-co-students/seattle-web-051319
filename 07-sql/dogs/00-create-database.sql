DROP TABLE dogs;
DROP TABLE owners;
DROP TABLE caretakers;

CREATE TABLE dogs (
  id INTEGER PRIMARY KEY,
  name TEXT,
  breed TEXT
);

CREATE TABLE owners (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE caretakers (
  dog_id INTEGER,
  owner_id INTEGER
);

INSERT INTO dogs (name, breed)
VALUES ('Odie', 'Yellow');

INSERT INTO dogs (name, breed)
VALUES ('Gregor', 'Dalmation');

INSERT INTO owners (name)
VALUES ('Jon Arbuckle');

INSERT INTO owners (name)
VALUES ('Pat');

INSERT INTO owners (name)
VALUES ('Terri');

/* Odie is taken care of by Jon */
INSERT INTO caretakers (dog_id, owner_id)
VALUES (1, 1);

/* Gregor is taken care of by Pat and Terri */
INSERT INTO caretakers (dog_id, owner_id)
VALUES (2, 2);
INSERT INTO caretakers (dog_id, owner_id)
VALUES (2, 3);

SELECT dogs.name, owners.name
FROM dogs
JOIN caretakers ON dogs.id = caretakers.dog_id
JOIN owners ON owners.id = caretakers.owner_id;