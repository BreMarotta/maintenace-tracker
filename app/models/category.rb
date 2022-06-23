class Category < ApplicationRecord
    belongs_to :owner
    has_many :items
    has_many :locations, through: :items
end
