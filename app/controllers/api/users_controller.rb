class Api::UsersController < ApplicationController

  def create


  end


  private
  #make sure this is correct
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
