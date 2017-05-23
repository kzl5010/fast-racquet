class CreateStringies < ActiveRecord::Migration
  def change
    create_table :stringies do |t|
      t.string :type, null: false
      t.string :price, null: false
      t.text :description
      
      t.timestamps null: false
    end
  end
end
