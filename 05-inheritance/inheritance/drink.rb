class Drink < Food
  def sip
    "sip. ahh"
  end

  def to_s
    parent_to_s = super
    "\\#{parent_to_s}/" # it's in a cup
  end
end