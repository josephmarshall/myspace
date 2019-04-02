class Api::CommentsController < ApplicationController
  before_action :set_post, only: [:index]

  def index
    render json: @post.comments
  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment
    else
      render json: {errors: comment.error }, status: 422
    end
  end

  def user_info_lookup
    user = User.find(Comment.find(params[:id]).user_id)
    render json: user
  end

  private

  def set_post
    @post = Post.find(params[:post_id])
  end

  def comment_params
    params.require(:comment).permit(:body, :post_id, :likes, :user_id)
  end

end
