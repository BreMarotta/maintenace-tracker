class Repair < ApplicationRecord
    belongs_to :repairable, :polymorphic => true
    belongs_to :person
    # test for github

end
