SELECT dogs.name AS Dog, owners.name AS Owner
FROM dogs
JOIN caretakers ON dogs.id = caretakers.dog_id
JOIN owners ON owners.id = caretakers.owner_id;