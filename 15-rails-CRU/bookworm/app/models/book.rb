class Book < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :author, presence: true
  validates :snippet, presence: true
end
