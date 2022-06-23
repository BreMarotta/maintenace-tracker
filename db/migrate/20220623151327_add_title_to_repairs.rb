class AddTitleToRepairs < ActiveRecord::Migration[6.1]
  def change
    add_column :repairs, :title, :string
  end
end
