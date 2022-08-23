class LocationsController < ApplicationController
    def create 
        new_location = @current_user.locations.create!(location_params)
        render json: new_location, status: :created
    end

    def index
        render json: @current_user.locations.sort_order

    end
    
    def update
        location = @current_user.locations.find(params[:id])
        location.update(location_params)
        if location.valid?
            render json: location, status: :accepted
        else
            render json: { errors: location.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy

    end

    private

    def location_params
        params.require(:location).permit(:id, :name, :address, :address_2)
    end
end
