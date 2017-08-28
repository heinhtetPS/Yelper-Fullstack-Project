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

require 'test_helper'

class BusinessCategoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
