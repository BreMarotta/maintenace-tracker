class PeopleController < ApplicationController

    def create 
        # byebug
        new_person = @current_user.people.create!(person_params)
        render json: new_person, status: :created
    end

    def show

    end
    
    def update

    end

    def destroy

    end

    private

    def person_params
        params.require(:person).permit(:name, :title, :color)
    end

end
