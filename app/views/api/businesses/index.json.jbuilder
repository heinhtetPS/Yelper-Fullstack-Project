@allbusiness.each do |business|
  json.set! business.id do
    json.extract! business, :id, :name, :address, :map_lat, :map_lng,
      :price, :website, :pictures, :hours, :delivery, :take_out, :accepts_credit_cards,
      :wifi
  end
end
