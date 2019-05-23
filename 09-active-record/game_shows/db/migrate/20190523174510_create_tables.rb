class CreateTables < ActiveRecord::Migration[5.2]
  def change
    create_table :gameshows do |table|
      table.string :name
    end

    create_table :hosts do |table|
      table.string :name
      table.integer :gameshow_id
    end
  end
end
