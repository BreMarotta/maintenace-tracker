class RepairsController < ApplicationController

    def create
        byebug
        part = @current_user.parts.find(params [:part_id])
        if part.valid?
            new_repair = part.repairs.create!(repair_params)
            render json: new_repair, status: :created
        else
            render json: { error: "Must Select Part" },
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
        params.require(:repair).permit(:part_id, :person_id, :date, :complete, :cost, :title)
    end
end
