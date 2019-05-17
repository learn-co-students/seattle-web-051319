class Food
  attr_reader :name, :calories
  
  def initialize(name, calories)
    @name = name
    @calories = calories
  end

  def eat
    "yum"
  end

  def to_s
    "#{name} (#{calories} calories)"
  end
end

def Drink
  def initialize(name, calories)
    @food = Food.new(name, calories)
  end

  def eat
    @food.eat
  end

  def to_s
    @food.to_s
  end
end