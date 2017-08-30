
json.set! @business.id do
  json.extract! @business, :id, :name, :address, :map_lat, :map_lng,
    :price, :website, :pictures, :hours, :delivery, :take_out, :accepts_credit_cards,
    :wifi, :categories
    json.reviews @business.reviews.each do |review|
      json.extract! review, :id, :author_id, :body, :business_id, :rating, :created_at
      json.user review.user :username
    end
end
