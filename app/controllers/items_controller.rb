class ItemsController < ApplicationController

    def create
        category = @current_user.categories.find(params[:category_id])
        if category.valid?
            new_item = category.items.create!(item_params)
            if new_item.valid?
                render json: new_item, status: :created
            else
                render json: { errors: new_item.errors.full_messages }, status: :unprocessable_entity
            end
        else 
            render json: { errors: "Must Select Category" }, status: :unprocessable_entity
        end
    end
    
    def show
        item = @current_user.items.find(params[:id])
        render json: item
    end

    def update 
        item = @current_user.items.find(params[:id])
        item.update(item_params)
        if item.valid?
            render json: item, status: :accepted
        else
            render json: { errors: item.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def item_params
        params.require(:item).permit(:name, :purchase_year, :year, :make, :model, :warrenty, :img, :location_id, :category_id, :id)
    end
end
