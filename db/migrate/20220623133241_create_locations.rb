class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.integer :owner_id
      t.string :name
      t.string :address

      t.timestamps
    end
  end
end
