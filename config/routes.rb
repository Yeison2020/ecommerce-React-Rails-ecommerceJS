Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Users Routes for Creating a User and prividing users data.
  post '/signup', to: 'users#create'

  get '/me', to: 'users#show'


  # Creating session

post '/login', to: 'sessions#create'

delete 'logout', to: 'sessions#destroy'

  # Defines the root path route ("/")
  # root "articles#index"
end
