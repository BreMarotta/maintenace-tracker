class PersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :title, :color, :active
end
