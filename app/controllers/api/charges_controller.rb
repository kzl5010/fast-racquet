class Api::ChargesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def create
    # Amount in cents
    puts params[:token]
    puts "HIT"
    puts params[:card]
    puts params[:email]
    @amount = params[:amount].to_i * 100

    customer = Stripe::Customer.create(
      :email => params[:email],
      :card  => params[:id]
    )

    charge = Stripe::Charge.create(
      :customer    => customer.id,
      :amount      => @amount,
      :description => 'Fast Racquet Customer',
      :currency    => 'usd'
    )

  rescue Stripe::CardError => e
    render json: e, status: 422
  end
end
