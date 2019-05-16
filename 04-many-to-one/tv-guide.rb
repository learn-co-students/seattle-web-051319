class TVGuide
  attr_accessor :tv_show, :network
  @@all = []

  def initialize(show, network)
    @tv_show = show 
    @network = network
    @@all << self
  end

  def self.total_shows
    @@all.length
  end

  def self.all
    @@all
  end
end