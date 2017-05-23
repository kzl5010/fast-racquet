class AddDiscountToUsers < ActiveRecord::Migration
  def change
    add_column :users, :first_buy, :string
  end
end
