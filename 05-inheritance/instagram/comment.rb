class Comment
  attr_reader :photo, :text
  @@all = []

  def initialize(photo, text)
    @photo = photo
    @text = text
    @@all << self
  end

  def self.all
    @@all
  end
end