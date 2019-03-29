class Api::FriendshipsController < ApplicationController
before_action :set_friends, only: [:index, :get_friends]

  def index
    render json: @people
  end

  def friendshipsIndex
    friendships = Friendship.all
    userFriendships = friendships.select do |friendship|
      friendship.user_id == current_user.id
    end
    render json: userFriendships
  end

  def get_friends
    render json: @friends
  end

  def create
    friendship = current_user.friendships.new(friend_id: params[:friend_id])
    if friendship.save
      render json: friendship
    else
      render json: { errors: @friendship.error }, status: 422
    end
  end

  def destroy
    Friendship.find(params[:id]).destroy
    render json: {alert: "friendship destroyed"}
  end

  private

  def set_friends
    users = User.all
    @people = users.select do |u|
      current_user.id != u.id
    end

    friendships = Friendship.all
    @friends = []
    friendships.each do |f|
      friend = @people.select do |p|
        p.id == f.friend_id
      end
      @friends << friend
      @friends.flatten!
    end
    @people -= @friends
  end
  
end
