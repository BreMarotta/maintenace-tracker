class Owner < ApplicationRecord
    has_secure_password

    has_many :designs, dependent: :destroy
    has_many :locations
    has_many :categories

    validates :username, :password, presence: true
    validates :username, uniqueness: { case_sensitive: false }

    accepts_nested_attributes_for :designs
end
