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