class FoodChain
  attr_reader :name, :location, :sales
  @@all = []

  def initialize(name, location)
    @name = name
    @location = location
    @sales = 0
    @@all << self
  end

  def sale(amount)
    @sales += amount
  end

  def FoodChain.total_sales
    total = 0
    @@all.each do |location|
      total += location.sales
    end
    total
  end

  def self.total_locations
    @@all.length
  end

  def self.all
    @@all
  end
end

m1 = FoodChain.new("McDonalds", "3rd & Pine")
m2 = FoodChain.new("McDonalds", "Queen Anne")

m1.sale(320)
m1.sale(834)
m1.sale(1820)
m1.sale(1999)
m2.sale(534)
m2.sale(354)

puts FoodChain.total_sales
puts FoodChain.total_locations
puts

puts FoodChain.all