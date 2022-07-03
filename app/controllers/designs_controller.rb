class DesignsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        design = @current_user.designs.first
        render json: design
    end

    def update
        design = @current_user.designs.find(params[:id])
        new_design = design.update!(design_params)
        render json: design, status: :accepted
    end

    private

    def design_params
        params.require(:design).permit(:user_id, :background, :main, :accent, :banner, :id)
    end

    def render_not_found_response
        render json: { error: "Design not found" },
        status: :not_found
    end
end
