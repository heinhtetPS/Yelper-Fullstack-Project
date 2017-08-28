class CreateBusinessCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :business_categories do |t|
      t.integer "business_id", null: false
      t.integer "category_id", null: false
      t.timestamps
    end
  end
end
