class Owner < ApplicationRecord
    has_secure_password

    has_one :design, dependent: :destroy
    has_many :locations
end
