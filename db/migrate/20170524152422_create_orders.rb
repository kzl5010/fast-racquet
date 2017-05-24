class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :address_line_one, null: false
      t.string :address_line_two
      t.string :price, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip_code, null: false
      t.timestamps null: false
    end
  end
end
