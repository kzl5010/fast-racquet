class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by_id(params[:id])
  end

  def update
    @user = User.find_by_id(params[:id])
    @user.update(user_params)
    render "api/users/show"
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :id, :first_buy)
  end
end
