class Author < ApplicationRecord
  has_many :books

  def book_count
    self.books.count
  end


end
