class PeopleController < ApplicationController

    def create 
        new_person = @current_user.people.create!(person_params)
        render json: new_person, status: :created
    end

    def show
        person = @current_user.people.find(params[:id])
        if person
            render json: person
        else
            render json: { errors: "Not Authorized" }, status: :unauthorized
        end
    end
    
    def update
        person = @current_user.people.find(params[:id])
        person.update(person_params)
        if person.valid?
            render json: person, status: :accepted
        else
            render json: { errors: person.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        person = @current_user.people.find(params[:id])
        if person.repairs.empty?
            person.destroy
            render json: { response: "content deleted"}, status: :ok
        else
            render json: { errors: "Cannot delete person with assigned repairs"}, status: :unprocessable_entity
        end

    end

    private

    def person_params
        params.require(:person).permit(:name, :title, :color, :current, :id)
    end

end
