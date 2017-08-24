Rails.application.routes.draw do
  root to: 'static_pages#root'
  #put all namespace api routes here
  namespace :api, defaults: {format: :json} do
    #user
    resources :users, only: [:create]
    #login/logout
    resource :session, only: [:create, :destroy]
    #business (restaurants)
    resources :businesses, only: [:index, :create, :update], :path => "biz"
  end

end
