class Api::ReviewsController < ApplicationController

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  def edit


  end

  def destroy


  end


private

  def review_params
    params.require(:review).permit(:author_id, :rating, :body)
  end
end
