class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.string :date, null: false
      t.string :rating, null: false
      t.text :body, null: false
      
      t.timestamps
    end
  end
end
