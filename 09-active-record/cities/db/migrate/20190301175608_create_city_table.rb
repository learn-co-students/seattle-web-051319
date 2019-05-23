class CreateCityTable < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.string :name
      t.integer :population
      t.integer :state_id
    end
  end
end
