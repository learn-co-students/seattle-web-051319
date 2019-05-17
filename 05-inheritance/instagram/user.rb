class User
  attr_reader :name
  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  # returns an array of every
  # photo associated with this user
  def photos
    Photo.all.select do |photo|
      photo.user == self
    end
  end

  def self.all
    @@all
  end
end