class AddStringyToOrders < ActiveRecord::Migration
  def change
    add_reference :orders, :stringy, foreign_key: true, null: false
  end
end
