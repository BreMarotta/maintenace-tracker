class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :designs
end
