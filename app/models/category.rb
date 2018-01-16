# == Schema Information
#
# Table name: categories
#
#  id          :integer          not null, primary key
#  business_id :integer
#  name        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Category < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :business_categories, inverse_of: :category, dependent: :destroy
  has_many :businesses, through: :business_categories, source: :business


end
