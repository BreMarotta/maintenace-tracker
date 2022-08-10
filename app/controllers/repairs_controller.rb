class RepairsController < ApplicationController

    def create

        # type = params[:repairable_type]
        if params[:repairable_type] = "items"
            byebug
            repair = @current_user.items.find(params[:repairable_id])
        elsif params[:repairable_type] = "parts"
            repair = @current_user.parts.find(params[:repairable_id])
        end
        # if repair.valid?
        #     # byebug
        #     new_repair = repair.repairs.create!(repair_params)
        #     render json: new_repair, status: :created
        # else
        #     render json: { error: "Must Assign Repair to an Item or a Part of an Item" },
        #     status: :unprocessable_entity   
        # end
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
        params.require(:repair).permit(:repairable_id, :repairable_type, :person_id, :date, :complete, :cost, :title, :summary, :id)
    end
end
