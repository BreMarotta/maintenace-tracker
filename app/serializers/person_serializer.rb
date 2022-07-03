class PersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :title, :color, :current
end
