class PersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :title, :color, :current

  has_many :repairs

  def repair_sum
    byebug
    self.object.repairs.cost.inject { |a, b| a + b} 
  end
  
end
