class Api::BusinessesController < ApplicationController

  def index
    #If there are bounds, filter by them, else default all
    @allbusiness = bounds ? Business.in_bounds(bounds) : Business.all

    #filtering with other settings, lets try categories first
    #categories works, now we have to make other params act like this
    if params[:searchterm]
      @allbusiness = @allbusiness.joins(:categories).where("categories.name ILIKE ?", params[:searchterm])
      #the below query doesn't work yet
    # elsif params[:searchterm]
    #   @allbusiness = @allbusiness.where("business.name ILIKE ?", "%#{params[:searchterm]}%")
    #pg_search: the query below works but doesn't play well with the other
        # @allbusiness = Business.search_name(params[:searchterm])
    end
  end

  def

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
