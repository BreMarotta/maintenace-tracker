class PeopleController < ApplicationController

    def create 
        new_person = @current_user.people.create!(person_params)
        render json: new_person, status: :created
    end

    def show
        person = @current_user.people.find(params[:id])
        render json: person
    end
    
    def update
        person = @current_user.people.find(params[:id])
        person.update(person_params)
        if person.valid?
            render json: person, status: :accepted
        else
            render json: { errors: book.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy

    end

    private

    def person_params
        params.require(:person).permit(:name, :title, :color)
    end

end
