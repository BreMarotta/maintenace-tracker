class RepairsController < ApplicationController

    before_action :find_repairable

    def create
        repair = @thing.repairs.create!(repair_params)
        if repair.valid?
            render json: repair, status: :created
        else
            render json: { errors: "Must Assign Repair to an Item or a Part of an Item" },
            status: :unprocessable_entity   
        end
    end

    def show
        repair = @current_user.repairs.find(params[:id])
        render json: repair 
    end

    def update 
        repair = @current_user.repairs.find(params[:id])
        repair.update(repair_params)
        if repair.valid?
            render json: repair, status: :accepted
        else
            render json: { errors: repair.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        repair = @current_user.repairs.find(params[:id])
        if repair.valid?
            repair.destroy
            render json: { response: "content deleted"}, status: :ok
        else
            render json: { errors: repair.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def repair_params
        params.require(:repair).permit(:repairable_id, :repairable_type, :person_id, :date, :complete, :cost, :title, :summary, :id)
    end

    def find_repairable
        
        @klass = params[:repairable_type].capitalize.constantize
        @thing = @klass.find(params[:repairable_id])
    end
end
