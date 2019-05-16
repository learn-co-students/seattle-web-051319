require './television-network'
require './tv-show'
require './tv-guide'

# define all the networks
hbo = TVNetwork.new('HBO')
disney = TVNetwork.new('Disney')
cbs = TVNetwork.new('CBS')

# define all the tv shows
true_detective = TVShow.new('True Detective')
got = TVShow.new('Game of Thrones')
killing_eve = TVShow.new('Killing Eve')
veep = TVShow.new('Veep')

even_stevens = TVShow.new('Even Stevens')
discovery = TVShow.new('Star Trek: Discovery')

# create 1-to-many relationships between network and shows
# one network has many tv shows
tvg1 = TVGuide.new(true_detective, hbo)
tvg2 = TVGuide.new(got, hbo)
tvg3 = TVGuide.new(killing_eve, hbo)
tvg99 = TVGuide.new(veep, hbo)

tvg4 = TVGuide.new(even_stevens, disney)
tvg5 = TVGuide.new(discovery, cbs)

networks = [hbo, disney, cbs]
networks.each do |network|
  puts network.name, network.shows
  puts
end

puts "moving Game of Thrones to CBS"
puts
tvg2.network = cbs

networks = [hbo, disney, cbs]
networks.each do |network|
  puts network.name, network.shows
  puts
end

puts
puts "Most Shows: #{TVNetwork.most_shows}"
puts "Total Shows: #{TVNetwork.total_shows}"