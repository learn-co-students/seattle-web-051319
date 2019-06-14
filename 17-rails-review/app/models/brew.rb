class Brew < ApplicationRecord
  # a brew name should be unique

  has_many :purchases, dependent: :destroy
  validates :blend_name, uniqueness: true
end
