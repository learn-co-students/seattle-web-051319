class TVNetwork
  attr_reader :name
  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def shows
    # iterate through every instance of a TVGuide showing
    # where each showing has a .tv_show and a .network
    # property. find the ones that belong to THIS (self)
    # network.
    network_showings = TVGuide.all.select do |showing|
      # does this showing's network refer to the
      # self that is this TVNetwork instance?
      showing.network == self 
    end

    # pluck off just the tv_show for every showing
    # on this network.
    network_showings.map do |showing|
      showing.tv_show
    end
  end

  # iterate through all the networks, see how many shows they have
  # and return the network with the most shows
  def self.most_shows
    most_shows = 0
    largest_network = nil

    TVNetwork.all.each do |network|
      shows = network.shows
      if shows.length > most_shows
        most_shows = shows.length
        largest_network = network
      end
    end

    largest_network
  end

  def self.total_shows
    num_shows_per_network = TVNetwork.all.collect do |network|
      network.shows.length
    end

    total = 0
    num_shows_per_network.each do |amount|
      total += amount
    end

    total
  end

  def to_s
    @name
  end

  def self.all
    @@all
  end
end