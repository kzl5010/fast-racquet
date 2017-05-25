export const createOrder = (order) => (
  $.ajax({
    method: "POST",
    url: "/api/orders",
    data: order
  })
)

export const updateOrder = (order) => (
  $.ajax({
    method: "PATCH",
    url: `/api/orders/${order.id}`,
    data: order
  })
)

export const fetchOrder = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/orders/${id}`
  })
)

export const fetchOrders = () => (
  $.ajax({
    method: "GET",
    url: "/api/orders"
  })
)

export const deleteOrder =  (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/orders/${id}`
  })
)
