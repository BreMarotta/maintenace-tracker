class Part < ApplicationRecord
    belongs_to :item
    has_many :repairs
    accepts_nested_attributes_for :repairs
end 
