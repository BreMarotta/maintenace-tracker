class UsersController < ApplicationController

    skip_before_action :authorize, only: :create 
    skip_before_action :authorize, only: :update


    #signup
    def create 
        # byebug
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        # byebug
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    # This is not really working correctly. I can't update the user preferences (company_name and type). I might need to move them to designs or include a password for authorization.....Moving on at this point. 
    def update
        # byebug 
        user = User.find_by(id: session[:user_id])
        user.save(user_params)
        # @current_user.save!
        render json: user
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation,designs_attributes:[
            :background,
            :banner, 
            :accent,
            :main,
            :company_name,
            :members
        ])
    end
end


