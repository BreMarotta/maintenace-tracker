class UsersController < ApplicationController

    skip_before_action :authorize, only: :create 
    skip_before_action :authorize, only: :update


    #signup
    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation, designs_attributes:[
            :background,
            :banner, 
            :accent,
            :main,
            :company_name,
            :members
        ])
    end
end


