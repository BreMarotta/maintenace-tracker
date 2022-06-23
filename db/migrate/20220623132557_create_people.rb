class CreatePeople < ActiveRecord::Migration[6.1]
  def change
    create_table :people do |t|
      t.integer :owner_id
      t.string :name
      t.string :title
      t.string :color

      t.timestamps
    end
  end
end
