class Category < ApplicationRecord
    belongs_to :user
    has_many :items
    has_many :locations, through: :items

    validates :name, uniqueness: { case_sensitive: false }
end
