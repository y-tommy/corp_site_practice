class PostsController < ApplicationController
  include Pagination
  before_action :set_post, only: [:show,:update,:destroy]

  def index
    @posts = Post.page(params[:page]).per(10).order('created_at DESC')

    @pagination = pagination(@posts)

    json_data = {
      "posts": @posts,
      "pagination": @pagination,
    }

    render json: json_data
  end

  def show
    render json: @post
  end

  def edit
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
  end

  private
  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
