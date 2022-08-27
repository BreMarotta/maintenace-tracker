class Location < ApplicationRecord
    belongs_to :user
    has_many :items
    has_many :categories, through: :items

    validates :name, presence: true, uniqueness: { scope: :user_id}

    def self.sort_order
        self.order("name": :asc)
    end
end
