class Car
  attr_reader :make, :model
  @@all = []

  def initialize(make: '', model: '')
    @make = make
    @model = model
  end

  def to_s
    "make: #{@make} model: #{@model}"
  end

  def self.all
    @@all
  end
end

pickup = Car.new("Toyota", "pickup")
van = Car.new("Dodge", "Caravan")
astro = Car.new(model: "astro", make: "Dodge")

puts "attr_reader? #{van.make} #{van.model}"
puts pickup, van, astro