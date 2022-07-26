class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :address_2
end
