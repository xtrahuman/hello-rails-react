Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # forward all requests to staticController but request
  # must be non-Ajax (!req.xhr) and HTML Mime Typ (req.format.html?).
  # This page does not include the root ("/") path
  namespace :v1, defaults: { format: 'json' } do
    get 'greetings', to: 'greetings#index'
  end
  get '*page', to: 'static#index', constraint: ->(req) do
    !req.xhr? && req.format.html?
end
  root "static#index"
end
