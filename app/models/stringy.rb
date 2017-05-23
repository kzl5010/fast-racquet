class Stringy < ActiveRecord::Base
  validates :typeof, :price, :description, presence: true
end
