class PostsController < ApplicationController

  def index
    @posts  = Post.all.order('created_at desc')
  end

  def home
    @posts  = Post.all.order('created_at desc').limit(4)
    render :index
  end

  def show
    @post   = Post.find(params[:id])
    @posts  = Post.order('created_at desc').limit(4).offset(1)
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end

end
