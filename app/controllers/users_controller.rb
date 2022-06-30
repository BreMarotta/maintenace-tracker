class UsersController < ApplicationController

    skip_before_action :authorize, only: :create


    #signup
    def create 

        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        # byebug
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation, :type, designs_attributes:[
            :background,
            :banner, 
            :accent,
            :main
        ])
    end
end


