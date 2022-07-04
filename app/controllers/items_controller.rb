class ItemsController < ApplicationController

    def create
        # byebug
        category = @current_user.categories.find(params[:category_id])
        if category.valid?
            new_item = category.items.create!(item_params)
            render json: new_item, status: :created
        else 
            render json: { error: "Must Select Category" }, status: :unprocessable_entity
        end
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
