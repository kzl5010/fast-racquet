class Api::StringiesController < ApplicationController
  def index
    @stringies = Stringy.all
  end

  def show
    @stringy = Stringy.find(params[:id])
  end

  def create
    @stringy = Stringy.new(stringy_params)
    if @stringy.save
      render :show
    else
      render json: @stringy.errors.full_messages, status: 422
    end
  end

  def update
    @stringy = Stringy.find(params[:id])
    render json: { message: "No task request found", status: 404 } if @stringy.nil?
    if @stringy.update(stringy_params)
      render "api/stringies/#{stringy.id}/show"
    else
      render json: @stringy.errors.full_messages, status: 422
    end
  end

  def destroy
    stringy = Stringy.find(params[:id])
    @stringy = stringy
    stringy.destroy
    render :show
  end

  def stringy_params
    params.require(:stringy).permit(:typeof, :price, :description)
  end

end
