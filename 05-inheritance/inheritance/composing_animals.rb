class Animal
  def initialize(name)
    @name = name
  end

  def to_s
    @name
  end

  def eat
    "eating"
  end
end

class Flyer
end

class Swimmer
end

class Poisonous
end

class Mammal < Animal
end

class Bear < Mammal
end

class Platypus
  def initialize
    @animal = Animal.new
    @poisonous = Poisonous.new
  end

  def eat
    @animal.eat
  end
end
