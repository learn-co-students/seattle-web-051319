class City < ActiveRecord::Base
    def state
        State.find(self.state_id)
    end
end