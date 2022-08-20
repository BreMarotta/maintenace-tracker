class RepairSerializer < ActiveModel::Serializer
  attributes :id, :complete, :cost, :date, :person_id, :repairable_id, :repairable_type, :title, :summary
end
