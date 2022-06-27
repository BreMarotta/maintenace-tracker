class OwnersController < ApplicationController

    skip_before_action :authorize, only: [:create]
    #signup
    def create 
        byebug
        owner = Owner.create!(owner_params)
        session[:owner_id] = owner.part_id
        render json: owner, status: :created
    end

    def show
        # byebug
        render json: @current_owner
    end

    private

    def owner_params
        params.permit(:username, :password, :password_confirmation, :owner)
    end

end


