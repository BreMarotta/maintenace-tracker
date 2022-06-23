class Item < ApplicationRecord
    belongs_to :location
    belongs_to :category
    has_many :parts, dependent: :destroy
    accepts_nested_attributes_for :parts
end
