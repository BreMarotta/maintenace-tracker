class User < ApplicationRecord
    has_secure_password

    has_many :designs, dependent: :destroy
    has_many :people, dependent: :destroy
    has_many :locations
    has_many :categories
    has_many :items, through: :categories
    has_many :parts, through: :items
    has_many :repairs, through: :people

    validates :username, :password, presence: true
    validates :username, uniqueness: { case_sensitive: false }

    accepts_nested_attributes_for :designs
end
