class OwnersHaveVets < ActiveRecord::Migration[5.2]
  def change
    add_column :owners, :vet_id, :integer
  end
end
