Rails.application.routes.draw do
    resources :lists
    resources :cards

  root to: "static_pages#root"
end
