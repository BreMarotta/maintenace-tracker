class AddRepairableToRepairs < ActiveRecord::Migration[6.1]
  def change
    change_table :repairs do |t|
      t.remove :part_id
      t.integer :repairable_id
      t.string :repairable_type

    end

    change_table :items do |t|
      t.text :description
      t.date :expected_repair
    end

    change_table :parts do |t|
      t.date :expected_repair
    end

  end
end
