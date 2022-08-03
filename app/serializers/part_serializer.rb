class PartSerializer < ActiveModel::Serializer
  attributes :id, :name, :model, :img, :price, :details, :item_id

  has_many :repairs
end
