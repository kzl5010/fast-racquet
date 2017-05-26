class AddTensionToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :tension, :integer, null: false
  end
end
