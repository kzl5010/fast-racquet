class Stringy < ActiveRecord::Base
  validates :typeof, :price, :description, presence: true
  has_many :orders
end
