# == Schema Information
#
# Table name: businesses
#
#  id                   :integer          not null, primary key
#  name                 :string           not null
#  address              :string           not null
#  map_lat              :float            not null
#  map_lng              :float            not null
#  price                :integer          not null
#  owner_id             :integer          not null
#  review_ids           :integer
#  website              :string
#  pictures             :string
#  hours                :string
#  delivery             :boolean
#  take_out             :boolean
#  accepts_credit_cards :boolean
#  wifi                 :boolean
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

class Business < ApplicationRecord
  validates :name, :map_lat, :map_lng, :address, :price, presence: true
  validates :categories, presence: { message: 'business must belong to at least one category'}
  validates :price, inclusion: { in: (1..4) } 

  belongs_to :user,
  foreign_key: :owner_id,
  class_name: "User"

  has_many :business_categories, inverse_of: :business, dependent: :destroy
  has_many :categories, through: :business_categories, source: :category

  has_many :reviews,
  foreign_key: :business_id,
  class_name: "Review"

end
