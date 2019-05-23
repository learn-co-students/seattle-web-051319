class Owner < ActiveRecord::Base
    # using has_many is synonymous with the manually
    # written method below. ActiveRecord gives us has_many
    has_many :pets
    belongs_to :vet

    # a owner may have many pets
    # def pets
    #     Pet.where(owner_id: self.id)
    # end
    
    # shows how many of each type of pet someone's owns
    # {cats: 1, dogs: 1}
    def types_of_pets
        tally = {}
        self.pets.each do |pet|
            if tally[pet.species] == nil
                tally[pet.species] = 0
            end
            tally[pet.species] += 1
        end
        tally
    end

    def breeds
        self.pets.map do |pet|
            pet.breed
        end.uniq
    end
end