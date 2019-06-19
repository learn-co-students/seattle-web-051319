Rails.application.routes.draw do
  resources :students, only: [:show, :new, :index, :create]
  root 'students#index'
  get '/login', to: 'sessions#login'
  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
  #
  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
