class CreateCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :categories do |t|
      t.integer :business_id
      t.string :name, null: false
      t.timestamps
    end
  end
end
