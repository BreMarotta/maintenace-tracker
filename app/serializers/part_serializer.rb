class PartSerializer < ActiveModel::Serializer
  attributes :id, :name, :model, :img, :price, :details, :item_id

end
