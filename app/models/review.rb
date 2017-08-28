# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  date       :string           not null
#  rating     :string           not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :author_id, :rating, :body, presence: true

  belongs_to :user,
  foreign_key: :author_id,
  class_name: "User"


end
