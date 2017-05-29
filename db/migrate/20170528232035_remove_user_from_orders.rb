class RemoveUserFromOrders < ActiveRecord::Migration
  def change
    remove_reference :orders, :user, foreign_key: true, null: false
  end
end
