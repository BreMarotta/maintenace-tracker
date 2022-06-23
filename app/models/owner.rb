class Owner < ApplicationRecord
    has_secure_password

    has_one :design, dependent: :destroy
end
