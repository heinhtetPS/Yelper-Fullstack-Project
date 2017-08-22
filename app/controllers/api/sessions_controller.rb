class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )
    if @user
      login(@user)
      #render the homepage
    else
      render json: ["Invalid username or password"], status: 422
      #redirect back to login page
    end
  end

  def destroy
    logout
    #redirect back to root
  end


end
