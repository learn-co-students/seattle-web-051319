class Purchase < ApplicationRecord
#   a purchase should have a size, which should be small, medium, or large
# a purchase should have a creamer_strength, which should be light, regular, or none
# a purchase should have special_instructions, which should be less than 140 characters
  belongs_to :brew
  # @options = ['small', 'medium', 'large']
  # validates :size, inclusion: @options
  validates :special_instructions, length: { maximum: 140}

  def options
    @options
  end
end
