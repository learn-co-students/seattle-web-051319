class TVShow
  attr_accessor :name
  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def network
    network_showing = TVGuide.all.find do |showing|
      showing.tv_show == self
    end
    network_showing.network
  end

  def to_s
    "#{@name} on #{network.name}"
  end

  def self.all
    @@all
  end
end