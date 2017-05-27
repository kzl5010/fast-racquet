class Api::OrdersController < ApplicationController
  before_action :require_logged_in

  def index
    @orders = Order.all
    if current_user
      @orders = current_user.orders
    end

    render :index
  end

  def show
    @order = Order.find(params[:id])
  end

  def create
    @order = Order.new(order_params)
    # @order.user_id = current_user.id

    if @order.save
      render :show
    else
      puts @order.errors.full_messages
      render json: @order.errors.full_messages, status: 422
    end
  end

  def update
    @order = Order.find(params[:id])
    render json: { message: "No task request found", status: 404 } if @order.nil?
    if @order.update(order_params)
      render "api/users/#{current_user.id}/task_requests/show"
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  def destroy
    order = Order.find(params[:id])
    @order = order
    order.destroy
    render :show
  end

  def order_params
    params.require(:order).permit(:first_name, :last_name, :address_line_one, :price, :city, :state, :zip_code, :user_id, :stringy_id, :tension, :instructions)
  end
end
