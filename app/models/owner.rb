class Owner < ApplicationRecord
    has_secure_password

    has_many :designs, dependent: :destroy
    has_many :locations
    has_many :categories

    validates :username, :password, :password_confirmation, presence: true
    validates :username, uniqueness: { case_sensitive: false }
end
