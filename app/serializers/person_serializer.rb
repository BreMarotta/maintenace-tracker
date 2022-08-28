class PersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :title, :color, :current, :repair_sum

  has_many :repairs do
    object.repairs.order(date: :desc)
  end

  def repair_sum
    self.object.repairs.sum(:cost)
  end
  
end
