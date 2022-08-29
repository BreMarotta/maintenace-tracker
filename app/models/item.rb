class Item < ApplicationRecord
    belongs_to :location
    belongs_to :category
    has_many :parts, dependent: :destroy
    accepts_nested_attributes_for :parts
    has_many :repairs, as: :repairable

    validates :name, presence: true, uniqueness: { scope: :category_id, case_sensitive: false}
    
end
