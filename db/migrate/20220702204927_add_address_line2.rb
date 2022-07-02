class AddAddressLine2 < ActiveRecord::Migration[6.1]
  def change
    change_table :locations do |t|
      t.string :address_2
    end
  end
end
