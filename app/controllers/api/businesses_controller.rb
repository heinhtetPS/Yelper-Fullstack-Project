class Api::BusinessesController < ApplicationController

  #create new business & persist into DB
  def index
    @allBusiness = Business.all 
  end

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

  #BONUS business show


  private
  def business_params
    params.require(:business).permit(
    :name, :address, :map_lat, :map_lng,
    :price, :owner_id, :website, :pictures,
    :hours, :delivery, :take_out,
    :accepts_credit_cards, :wifi,
    )
  end
end
