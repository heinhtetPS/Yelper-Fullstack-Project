class Api::ReviewsController < ApplicationController

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)

    #maybe we need to set user_id here
    #maybe we can include that in the params or current_user?
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  def edit
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
  end


private

  def review_params
    params.require(:review).permit(:author_id, :rating, :body)
  end
end
