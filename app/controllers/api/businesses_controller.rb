class Api::BusinessesController < ApplicationController

  def index
    #If there are bounds, filter by them, else default all
    @allbusiness = bounds ? Business.in_bounds(bounds) : Business.all

    #if there's a searchterm, compare it against names and categories
    if params[:searchterm]
      #flag for randomized return 
      if params[:searchterm] == "random!"
        @allbusiness = Business.order("RANDOM()").limit(4)
      else
        @allbusiness = Business.search_all(params[:searchterm])
      end
    end

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

  #maybe we can do edit later if time permits


  private
  def business_params
    params.require(:business).permit(
    :name, :address, :map_lat, :map_lng,
    :price, :owner_id, :website, :pictures,
    :hours, :delivery, :take_out,
    :accepts_credit_cards, :wifi, categories: [],
    )
  end

  def bounds
    params[:bounds]
  end
end
