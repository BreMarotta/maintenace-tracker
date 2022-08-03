class PersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :title, :color, :current

  has_many :repairs
end
