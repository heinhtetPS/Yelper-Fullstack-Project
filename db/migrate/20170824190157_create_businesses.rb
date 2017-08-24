class CreateBusinesses < ActiveRecord::Migration[5.0]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.float :map_lat, null: false
      t.float :map_lng, null: false
      t.integer :price, null: false
      t.integer :owner_id, null: false
      t.integer :review_ids
      t.string :website
      t.string :pictures
      t.string :hours
      t.boolean :delivery
      t.boolean :take_out
      t.boolean :accepts_credit_cards
      t.boolean :wifi

      t.timestamps
    end

  end
end
