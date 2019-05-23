class CreateStateTable < ActiveRecord::Migration[5.2]
  def change
    create_table :states do |t|
      t.string :name
      t.string :motto
    end
  end
end
