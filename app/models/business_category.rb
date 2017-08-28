# == Schema Information
#
# Table name: business_categories
#
#  id          :integer          not null, primary key
#  business_id :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class BusinessCategory < ApplicationRecord
  validates :business, :category, presence: true

  belongs_to :business
  belongs_to :category

end
