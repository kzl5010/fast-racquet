class Order < ActiveRecord::Base
  validates :first_name, :last_name, :address_line_one, :price, :city, :state, :zip_code, :user_id, :stringy_id, presence: true
  belongs_to :user
  belongs_to :stringy
end
