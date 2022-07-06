class RenameTypeColumn < ActiveRecord::Migration[6.1]
  def change
    change_table :designs do |t|
      t.rename :type, :members
    end
    
  end
end
