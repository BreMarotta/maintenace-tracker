class MoveSiteDetailsToDesigns < ActiveRecord::Migration[6.1]
  def change
    change_table :users do |t|
      t.remove :company_name
      t.remove :type
    end

    change_table :designs do |t|
      t.string :company_name
      t.string :type
    end
  end
end
