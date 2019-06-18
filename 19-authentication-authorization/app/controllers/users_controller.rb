class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    # byebug
    @user = User.create(username: params[:user][:username])
    session[:user_id] = @user.id
    redirect_to root_path
  end
end
