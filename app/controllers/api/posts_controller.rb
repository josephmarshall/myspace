class Api::PostsController < ApplicationController
before_action :set_post, only: [:update, :destroy]

  def index
    render json: current_user.posts
  end

  def index_of_friend_posts
    friend = User.find(params[:friend_id])
    render json: friend.posts
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post
    else
      render json: { errors: post.error }, status: :unprocessable_entity 
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: { errors: @post.error }, status: 422
    end
  end

  def destroy
    @post.destroy
    render json: { alert: ("Post Deleted") }
  end

  private
  
  def post_params
    params.require(:post).permit(:title, :body, :likes, :user_id, :friend_id)
  end

  def set_post
    @post = current_user.posts.find(params[:id])
  end

end
