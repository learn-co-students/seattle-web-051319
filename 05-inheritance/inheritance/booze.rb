class Booze < Drink
  attr_reader :abv
  def initialize(name, calories, abv)
    super(name, calories)
    @abv = abv
  end

  def to_s
    parent_to_s = super
    parent_to_s = parent_to_s.gsub("\\", "{")
    parent_to_s = parent_to_s.gsub("/", "}")
    parent_to_s + " #{abv}%abv"
  end
end