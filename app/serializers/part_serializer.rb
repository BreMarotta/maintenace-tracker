class PartSerializer < ActiveModel::Serializer
  attributes :id, :name, :model, :img, :price, :details

  has_many :repairs
end
