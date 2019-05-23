class CreatePetsTable < ActiveRecord::Migration[5.2]
  def change
    # call the create_table function
    # have the table be named "pets"
    # then inside the block, configure columns
    create_table :pets do |table|
      # create a column on the table
      # with type string (or integer, or whatever else)
      # named ":column_name"
      table.string :name
      table.integer :age
      table.string :breed
      table.string :species
    end
  end
end
