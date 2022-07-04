class ItemsController < ApplicationController

    def create
        byebug
        new_item = @current_user.items.create!(item_params)
        render json: new_item, status: :created
    end
    
    def show

    end

    def index 

    end

    def update 

    end

    def destroy

    end

    private

    def item_params
        params.require(:item).permit(:name, :purchase_year, :year, :make, :model, :warrenty, :img, :location_id, :category_id)
    end
end
