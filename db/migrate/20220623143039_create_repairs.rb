class CreateRepairs < ActiveRecord::Migration[6.1]
  def change
    create_table :repairs do |t|
      t.integer :part_id
      t.integer :person_id
      t.date :date
      t.boolean :complete
      t.string :cost

      t.timestamps
    end
  end
end
