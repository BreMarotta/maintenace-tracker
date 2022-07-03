class AddActiveStatusToPeople < ActiveRecord::Migration[6.1]
  def change
    change_table :people do |t|
      t.string :active 
    end
  end
end
