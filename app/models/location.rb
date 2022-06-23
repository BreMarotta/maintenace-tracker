class Location < ApplicationRecord
    belongs_to :owner
    has_many :items
    has_many :categories, through: :items
end
