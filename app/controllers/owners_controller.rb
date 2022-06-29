class OwnersController < ApplicationController

    skip_before_action :authorize, only: :create


    #signup
    def create 

        owner = Owner.create!(owner_params)
        session[:owner_id] = owner.id
        # owner.designs.create!(design_params)
        render json: owner, status: :created
    end

    def show
        # byebug
        owner = Owner.find_by(id: session[:owner_id])
        render json: owner
    end

    private

    def owner_params
        params.require(:owner).permit(:username, :password, :password_confirmation, designs_attributes:[
            :background,
            :banner, 
            :accent,
            :main
        ])
    end

    # def design_params
    #     params.permit(:background, :banner, :accent, :main)
    # end



end


