Rails.application.routes.draw do
  resources :authors, only: [:show, :index]
  get '/authors/:id', to: 'authors#show'
  # get '/authors', to: 'authors#index'

  resources :books
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
