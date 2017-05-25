json.orders @orders.each_with_index do |order, idx|
  json.set! idx
  json.partial! 'order', order: order
end
