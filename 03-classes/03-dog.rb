class Dog
  attr_reader :breed, :name
  attr_writer :name
  attr_accessor :trained

  def initialize(name, breed, trained)
    @name = name
    @breed = breed
    @trained = trained
  end
end

d1 = Dog.new('Garfield', 'cat', false)
d2 = Dog.new('Clifford', 'big', true)
d3 = Dog.new('Marmaduke', 'big', false)

puts d1.name