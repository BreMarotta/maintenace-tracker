class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :purchase_year, :category_id, :location_id, :year, :make, :model, :warrenty, :img

  has_many :parts
end
