class ChangePersonActiveToBoolean < ActiveRecord::Migration[6.1]
  def change
      change_table :people do |t|
        t.remove :active
        t.boolean :current
      end
  end
end
