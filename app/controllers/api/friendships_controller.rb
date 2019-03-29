class Api::FriendshipsController < ApplicationController
  def create
    friendship = currentuser.friendships.new(friend_id: params[:friend_id])
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

end
