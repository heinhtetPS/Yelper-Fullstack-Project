class Api::SessionsController < ApplicationController

  #new session = new login
  def create
    @user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )
    if @user
      login(@user)
      redirect_to :root
    else
      render json: ["Invalid username or password"], status: 422
      #redirect back to login page
    end
  end

  #destroy session = logout
  def destroy
    logout
    redirect_to :root
  end


end
