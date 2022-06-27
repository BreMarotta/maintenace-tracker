class DesignsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def show
        design = @current_owner.designs.find(params[:id])
        render json: design
    end

    def create 
        new_design = @current_owner.designs.create!(design_params)
        render json: new_design, status: :created
    end

    def update
        design = @current_owner.designs.find(params[:id])
        design.update(design_params)
        if design.valid?
            render json: design, status: :accepted
        else
            render json: { errors: design.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def design_params
        params.require(:design).permit(:owner_id, :background, :main, :accent, :banner)
    end

    def render_not_found_response
        render json: { error: "Design not found" },
        status: :not_found
    end
end
