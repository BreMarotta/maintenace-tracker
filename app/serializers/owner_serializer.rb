class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :designs
  has_many :people
end
