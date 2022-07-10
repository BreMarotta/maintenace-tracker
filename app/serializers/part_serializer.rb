class PartSerializer < ActiveModel::Serializer
  attributes :id, :name, :model, :img, :price, :details
end
