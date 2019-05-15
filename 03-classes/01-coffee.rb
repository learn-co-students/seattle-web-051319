class Coffee
  def initialize(type, size)
    @type = type
    @size = size
    @amount = size
  end

  def sip
    @amount -= 1
  end

  def type
    @type
  end

  def type=(value)
    @type = value
  end

  def size
    @size
  end

  def size=(value)
    @size = value
  end

  def amount
    @amount
  end

  def amount=(val)
    @amount = val
  end

  def to_s
    "#{@type} #{@amount}/#{@size}"
  end
end

c1 = Coffee.new('Americano', 16)
c2 = Coffee.new('Drip', 12)
c3 = Coffee.new('Hot Water', 8)

puts "Order up!"
puts c1
puts c2
puts c3
puts

puts "sipping... ahh"
c1.sip
puts c1

if c1.type == 'Dopyo'
  puts "nice choice, yo"
else
  puts "ohh, nice choice."
end