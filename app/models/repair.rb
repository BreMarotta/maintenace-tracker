class Repair < ApplicationRecord
    belongs_to :part 
    belongs_to :person
end
