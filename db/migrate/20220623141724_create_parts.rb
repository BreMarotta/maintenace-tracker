class CreateParts < ActiveRecord::Migration[6.1]
  def change
    create_table :parts do |t|
      t.integer :item_id
      t.string :model
      t.string :img
      t.string :details
      t.integer :price

      t.timestamps
    end
  end
end
