class AddCompanyNameToUser < ActiveRecord::Migration[6.1]
  def change
    change_table :users do |t|
      t.string :company_name
    end
  end
end
