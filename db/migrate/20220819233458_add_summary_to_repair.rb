class AddSummaryToRepair < ActiveRecord::Migration[6.1]
  def change
    change_table :repairs do |t|
      t.string :summary
    end
  end
end
