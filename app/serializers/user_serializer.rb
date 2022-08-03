class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :designs
  has_many :people
  has_many :categories
  has_many :locations
  has_many :items, through: :categories
  has_many :parts, through: :items
  has_many :repairs, through: :people

end
