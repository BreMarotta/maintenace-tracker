class Person < ApplicationRecord
    belongs_to :owner
    has_many :repairs
end
