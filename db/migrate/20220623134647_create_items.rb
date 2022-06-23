class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.integer :location_id
      t.integer :category_id
      t.string :name
      t.string :purchase_year
      t.string :year
      t.string :make
      t.string :model
      t.string :warrenty
      t.string :img

      t.timestamps
    end
  end
end
