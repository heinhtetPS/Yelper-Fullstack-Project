Rails.application.routes.draw do
  root to: 'static_pages#root'
  #put all namespace api routes here
  namespace :api, defaults: {format: :json} do
    #user
    resources :users, only: [:create]
    #login/logout
    resource :session, only: [:create, :destroy]
    #business
    resources :businesses, only: [:index, :show, :create, :update, :featured], :path => "biz"
    #Reviews
    resources :reviews, only: [:create, :show, :update, :destroy]
    #Search
    resources :search, only: [:index]
  end

end
