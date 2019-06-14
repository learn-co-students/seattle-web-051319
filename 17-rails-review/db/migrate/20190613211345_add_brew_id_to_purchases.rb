class AddBrewIdToPurchases < ActiveRecord::Migration[5.2]
  def change
    add_column :purchases, :brew_id, :integer
  end
end
