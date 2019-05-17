class Photo
  attr_accessor :user, :thing
  @@all = []

  def initialize
    @user = nil
    @@all << self
  end

  def make_comment(text)
    Comment.new(self, text)
  end

  # return an array of all comments associated
  # with this photo
  def comments
    Comment.all.select do |comment|
      comment.photo == self
    end
  end

  def self.all
    @@all
  end
end