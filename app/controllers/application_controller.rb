class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  #used to check global session state
  helper_method :current_user, :logged_in?

  private

  #enables user checks inside html or js views
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  #checks that current user is NOT null
  def logged_in?
    !!current_user
  end

  #log the user in, generating a session_token and setting as current
  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  #destroy session token upon logout
  def logout()
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  #redirects user from forbidden content
  def require_login!
    redirect_to new_session_url unless logged_in?
  end

end
