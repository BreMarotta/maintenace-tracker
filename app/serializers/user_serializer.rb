class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :type

  has_many :designs
  has_many :people
end
