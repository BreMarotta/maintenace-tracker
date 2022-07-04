class Location < ApplicationRecord
    belongs_to :user
    has_many :items
    has_many :categories, through: :items

    def self.sort_order
        self.sort("name": :asc)
    end
end
