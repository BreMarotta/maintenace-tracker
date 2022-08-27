class CategoriesController < ApplicationController
  def create
    new_category = @current_user.categories.create!(category_params)
    render json: new_category, status: :created
  end

  def index
    render json: categories.sort_order
  end

  def update
    category = @current_user.categories.find(params[:id])
    category.update(category_params)
    if category.valid?
      render json: category, status: :accepted
    else
      render json: { errors: category.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    category = @current_user.categories.find(params[:id])
    if category.items.empty?
      category.destroy
      render json: { repsonse: "content deleted"}, status: :ok
    else
      render json: { errors: "Cannot delete category while itmes are still assigned to it" }, status: :unprocessable_entity
    end
  end

  private
  def category_params
    params.require(:category).permit(:name)
  end
end
