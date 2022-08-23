class Repair < ApplicationRecord
    belongs_to :repairable, :polymorphic => true
    belongs_to :person

end
