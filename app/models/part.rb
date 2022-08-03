class Part < ApplicationRecord
    belongs_to :item
    has_many :repairs, as: :repairable
end 
