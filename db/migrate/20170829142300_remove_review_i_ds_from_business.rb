class RemoveReviewIDsFromBusiness < ActiveRecord::Migration[5.0]
  def change
    remove_column :businesses, :review_ids 
  end
end
