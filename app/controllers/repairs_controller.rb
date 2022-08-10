class RepairsController < ApplicationController

    def create
        byebug
        person = @current_user.people.find(params[:person_id])
        if person.valid?
            new_repair = person.repairs.create!(repair_params)
            render json: new_repair, status: :created
        else
            render json: { error: "Must Assign Person" },
            status: :unprocessable_entity   
        end
    end

    def show
        repair = @current_user.repairs.find(params[:id])
        render json: repair 
    end

    def update 

    end

    def destroy

    end

    private

    def repair_params
        params.require(:repair).permit(:repairable_id, :repairable_type, :person_id, :date, :complete, :cost, :title)
    end
end
