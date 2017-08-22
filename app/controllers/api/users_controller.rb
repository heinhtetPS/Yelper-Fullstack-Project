class Api::UsersController < ApplicationController

  #create new user and persist into DB
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      #render root page
    else
      render json: @user.errors.full_messages
    end
  end

  #BONUS user show


  private
  #make sure whether I have to add the other params or are they
  #optional?
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
