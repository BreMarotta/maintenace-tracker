class Person < ApplicationRecord
    belongs_to :user
    has_many :repairs

    validates :name, presence: true, uniqueness: { scope: :user_id}

end
