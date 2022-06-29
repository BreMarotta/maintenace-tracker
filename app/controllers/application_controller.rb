class ApplicationController < ActionController::API
    include ActionController::Cookies
  
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

before_action :authorize

    def hello_world
      session[:count] = (session[:count] || 0) + 1
      render json: { count: session[:count] }
    end

    private
    
    def authorize
      @current_owner = Owner.find_by(id: session[:owner_id])
      render json: { errors: ["Unauthorized"] }, status: :unauthorized unless @current_owner
    end

    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end 

  end

