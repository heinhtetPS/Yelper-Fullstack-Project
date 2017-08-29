class AddBizzIDandFloatValtoReviews < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :business_id, :integer
    remove_column :reviews, :rating
    add_column :reviews, :rating, :float
  end
end
