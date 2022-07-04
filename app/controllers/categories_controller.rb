class CategoriesController < ApplicationController
  def create
    new_category = @current_user.categories.create!(category_params)
    render json: new_category, status: :created
  end

  def index
    render json: categories.sort_order
  end

  def update
  end

  def destroy
  end

  private
  def category_params
    params.require(:category).permit(:name)
  end
end
