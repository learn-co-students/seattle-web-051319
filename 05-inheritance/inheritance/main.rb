require './env.rb'

sandwich = Food.new("sandwich", 100)
milk = Drink.new("milk", 150)
rainier = Booze.new("rainer", 250, 3.5)

puts sandwich
puts milk

binding.pry