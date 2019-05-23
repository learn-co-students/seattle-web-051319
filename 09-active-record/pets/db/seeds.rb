Owner.destroy_all
Pet.destroy_all
Vet.destroy_all

david = Vet.create(name: 'David Stoll', company: 'Fancy Cats', rate: 80)
aspen = Vet.create(name: 'Aspen James', company: 'Slippery Snakes', rate: 80)
steve = Vet.create(name: 'Steve Geluso', company: 'Racoon Rescue', rate: 81)

john = Owner.create(name: "Jon Arbuckle", age: 48, vet: david)
odie = Pet.create(
    name: "Odie", age: 8,
    breed: "Dog", species: "Dog",
    owner_id: john.id
)

garfield = Pet.create(
    name: "Garfield", age: 52, species: "cat",
    breed: "orange", owner_id: john.id
)
