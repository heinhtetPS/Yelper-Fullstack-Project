class RemoveDateFromReviews < ActiveRecord::Migration[5.0]
  def change
    remove_column :reviews, :date
  end
end
