Rails.application.routes.draw do
  root to: "static_pages#root"
  #put all api routes here
  namespace :api, defaults: {format: :json} do
    #login/logout
    resource :session, only: [:create, :destroy]
    #user
    resources :user, only: [:create]
  end

end
