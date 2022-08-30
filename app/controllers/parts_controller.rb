class PartsController < ApplicationController

    def create 
        item = @current_user.items.find(params[:item_id])
        if item.valid?
            new_part = item.parts.create!(part_params)
            render json: new_part, status: :created
        else
            render json: { error: "Item not found" }, status: :unprocessable_entity
        end
    end

    def update 
        part = @current_user.parts.find(params[:id])
        part.update(part_params)
        if part.valid?
            render json: part, status: :accepted
        else
            render json: { errors: part.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def part_params
        params.require(:part).permit(:name, :model, :img, :price, :details, :item_id, :id)
    end
end
