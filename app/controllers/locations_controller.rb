class LocationsController < ApplicationController
    def create 
        new_location = @current_user.locations.create!(location_params)
        render json: new_location, status: :created
    end

    def index
        render json: @current_user.locations.sort_order

    end
    
    def update

    end

    def destroy

    end

    private

    def location_params
        params.require(:location).permit(:name, :address, :address_2)
    end
end
