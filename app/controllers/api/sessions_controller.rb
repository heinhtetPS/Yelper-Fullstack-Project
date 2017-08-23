class Api::SessionsController < ApplicationController

  #new session = new login
  def create
    @user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )
    if @user
      login(@user)
      render :show
    else
      render json: ["Invalid username or password"], status: 422
      #redirect back to login page
    end
  end

  #destroy session = logout
  def destroy
    @user = current_user
    if @user
      logout
      render :destroy
    else
      render json: ["Nobody signed in"], status: 404
    end
  end


end
