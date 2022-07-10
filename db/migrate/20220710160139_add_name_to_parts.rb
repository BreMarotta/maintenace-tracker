class AddNameToParts < ActiveRecord::Migration[6.1]
  def change
    change_table :parts do |t|
      t.string :name
    end
  end
end
