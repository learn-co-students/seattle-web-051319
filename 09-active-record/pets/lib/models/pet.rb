class Pet < ActiveRecord::Base
    # use belongs_to that ActiveRecord gives us
    # instead of building the relationship method
    # manually.
    
    # oops! plurality mistake!!
    # belongs_to :owners

    # correct! refer to owner as singul;ar
    belongs_to :owner

    # def owner
    #     Owner.find(self.owner_id)
    # end
end