Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :posts do
      resources :comments
    end

    resources :friendships do
    end


  end

  get 'api/get_friends', to: 'api/friendships#get_friends'
  get 'api/get_friendships', to: 'api/friendships#friendshipsIndex'
  get 'api/index_of_friend_posts/:friend_id', to: 'api/posts#index_of_friend_posts'
  get 'api/posts/:post_id/comments/:id/user_info_lookup', to: 'api/comments#user_info_lookup'

  get "*other", to: "static#index"
end
