class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :designs

  has_many :people do
    object.people.order(:name)
  end

  has_many :categories do
    object.categories.order(:name)
  end

  has_many :locations do
    object.locations.order(:name)
  end

  has_many :items, through: :categories do
    object.items.order(:name)
  end

  has_many :parts, through: :items do
    object.parts.order(:name)
  end

  has_many :repairs, through: :people do
    object.repairs.order(:title)
  end

end
