class DesignsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        byebug
        design = @current_owner.designs.first
        render json: design
    end

    def update
        # byebug
        design = @current_owner.designs.first
        new_design = design.update!(design_params)
        render json: design, status: :accepted
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
