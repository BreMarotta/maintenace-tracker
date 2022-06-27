class SessionsController < ApplicationController

    skip_before_action :authorize, only: :create
    #login
    def create 
        owner = Owner.find_by(username: params[:username])
        if owner&.authenticate(params[:password])
            session[:owner_id] = owner.id
            render json: owner
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end   
    end

    #logout
    def destroy
        session.clear

    end
end
