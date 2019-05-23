class State < ActiveRecord::Base
    def states
        Books.where(state_id: self.id)
    end
end