class AddUserOptionalToOrders < ActiveRecord::Migration
  def change
    add_reference :orders, :user, foreign_key: true
  end
end
