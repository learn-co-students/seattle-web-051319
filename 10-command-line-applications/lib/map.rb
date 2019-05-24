x1, y1 = 45.516385, -122.659399
x2, y2 = 45.512509, -122.656736
x3, y3 = 45.515810, -122.665635

pointsx = [x1, x2, x3]
pointsy = [y1, y2, y3]

min_xx = pointsx.min
max_xx = pointsx.max

min_yy = pointsy.min
max_yy = pointsy.max

puts min_xx, max_xx, min_yy, max_yy
puts

dx = max_xx - min_xx
dy = max_yy - min_yy

min_xx -= dx / 2
max_xx += dx / 2

min_yy -= dy / 2
max_yy += dy / 2

width = max_xx - min_xx
height = max_yy - min_yy

puts dx, dy
puts

rows = 10
cols = 20

line = "|                    |\n"
lines = line * 10

def percent(xx, yy, min_xx, min_yy, width, height)
  percent_x = (xx - min_xx) / width
  percent_y = (yy - min_yy) / height

  puts "percent"
  puts percent_x, percent_y
  puts
end

def xx_to_col(xx, cols, width, min_xx)
  ((xx - min_xx) / width * cols).floor
end

def yy_to_row(yy, rows, height, min_yy)
  ((yy - min_yy) / height * rows).floor
end

percent(x1, y1, min_xx, min_yy, width, height)
percent(x2, y2, min_xx, min_yy, width, height)
percent(x3, y3, min_xx, min_yy, width, height)

label = "A"

class Place
  attr_reader :xx, :yy
  def initialize(xx, yy)
    @xx = xx
    @yy = yy
  end
end

places = [
  Place.new(x1, y1),
  Place.new(x2, y2),
  Place.new(x3, y3)
]

# print out every letter manually one at a time
rows.times do |row|
  line = "|"

  cols.times do |col|
    place = places.find do |place|
      row_i = yy_to_row(place.yy, rows, height, min_yy)
      col_i = xx_to_col(place.xx, cols, width, min_xx)
      row_i == row && col_i == col
    end

    if place
      line << label
      label = label.next
    else
      line << " "  
    end
  end

  line << "|"
  puts line
end
