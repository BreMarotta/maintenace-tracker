class DesignSerializer < ActiveModel::Serializer
  attributes :id, :main, :accent, :background, :banner, :company_name, :members
end
