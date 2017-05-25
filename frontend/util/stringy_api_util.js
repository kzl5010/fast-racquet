export const fetchStringies = () => (
  $.ajax({
    method: "GET",
    url: 'api/stringies'
  })
)

export const fetchString = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/stringies/${id}`
  })
)
