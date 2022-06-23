class Location < ApplicationRecord
    belongs_to :owner
    has_many :items
    has_may :categories, through: :items
end
