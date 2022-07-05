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
        item = @current_user.items.find(params[:id])
        render json: item
    end

    def index 

    end

    def update 
        # byebug
        item = @current_user.items.find(params[:id])
        item.update(item_params)
        if item.valid?
            render json: item, status: :accepted
        else
            render json: { errors: item.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy

    end

    private

    def item_params
        params.require(:item).permit(:name, :purchase_year, :year, :make, :model, :warrenty, :img, :location_id, :category_id)
    end
end
