Rails.application.routes.draw do
  resources :purchases
  get '/brews/strongest', to: 'brews#strongest'
  resources :brews
  # get '/brews/:id', to: 'brews#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
