class AddUserToOrders < ActiveRecord::Migration
  def change
    add_reference :orders, :user, foreign_key: true, null: false
  end
end
