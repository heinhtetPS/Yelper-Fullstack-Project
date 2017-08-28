class Api::BusinessesController < ApplicationController

  #create new business & persist into DB
  def index
    @allbusiness = Business.all
    #Below is all the filtering stuff
    # allbusiness = bounds ? Bench.in_bounds(bounds) : Bench.all
    #
    # if params[:minSeating] && params[:maxSeating]
    #   allbusiness = allbusiness.where(seating: seating_range)
    # end
    #
    # @allbusiness = allbusiness.includes(:reviews, :favorite_users)
    # render :index
  end

  #Remember: category is not technically part of business's own db
  #but it is required to save! or create!
  def create
    @business = Business.new(business_params)
    if @business.save
      render :show
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def show
    @business = Business.find(params[:id])
  end

  #maybe we can do edit and destroy later if time permits


  private
  def business_params
    params.require(:business).permit(
    :name, :address, :map_lat, :map_lng,
    :price, :owner_id, :website, :pictures,
    :hours, :delivery, :take_out,
    :accepts_credit_cards, :wifi, categories: [],
    )
  end
end
