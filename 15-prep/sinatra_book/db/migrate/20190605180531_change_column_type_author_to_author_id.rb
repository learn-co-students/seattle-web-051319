class ChangeColumnTypeAuthorToAuthorId < ActiveRecord::Migration[5.2]
  def change
    change_column :books, :author, :integer
    rename_column :books, :author, :author_id
  end
end
