class Person < ApplicationRecord
    belongs_to :user
    has_many :repairs

    validates :name, presence: true
    validates :name, uniqueness: { case_sensitive: false }
end
