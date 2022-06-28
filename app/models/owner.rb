class Owner < ApplicationRecord
    has_secure_password

    has_one :design, dependent: :destroy
    has_many :locations
    has_many :categories

    validates :username, :password, presence: true
    validates :username, uniqueness: { case_sensitive: false }
end
