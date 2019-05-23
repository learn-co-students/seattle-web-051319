class Vetranaryirans < ActiveRecord::Migration[5.2]
  def change
    create_table :vets do |table|
      table.string :name
      table.string :company
      table.integer :rate
    end
  end
end
