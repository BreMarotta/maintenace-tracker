class CreateDesigns < ActiveRecord::Migration[6.1]
  def change
    create_table :designs do |t|
      t.integer :owner_id
      t.string :banner
      t.string :background
      t.string :main
      t.string :accent

      t.timestamps
    end
  end
end
