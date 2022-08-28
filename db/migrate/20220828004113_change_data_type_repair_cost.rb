class ChangeDataTypeRepairCost < ActiveRecord::Migration[6.1]
  def change
    change_column :repairs, :cost, "integer USING NULLIF(cost, '')::int"
  end
end
