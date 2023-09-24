Rails.application.routes.draw do
  resources :users, only: [:index]
  resources :projects

  # User
  get '/me', to: 'users#show'

  # Sessions
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # get 'latest', to: 'projects#latest'
  # Defines the root path route ("/")
  # root "articles#index"
end
