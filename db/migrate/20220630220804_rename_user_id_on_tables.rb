class RenameUserIdOnTables < ActiveRecord::Migration[6.1]
  def change
    change_table :categories do |t|
      t.rename :owner_id, :user_id
    end

    change_table :designs do |t|
      t.rename :owner_id, :user_id
    end

    change_table :locations do |t|
      t.rename :owner_id, :user_id
    end

    change_table :people do |t|
      t.rename :owner_id, :user_id
    end
  end
end
