class RenameOwnerTableToUser < ActiveRecord::Migration[6.1]
  def change
    rename_table :owners, :users
  end
end
