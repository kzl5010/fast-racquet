json.stringies @stringies.each_with_index do |stringy, idx|
  json.set! idx
  json.partial! 'stringy', stringy: stringy
end
