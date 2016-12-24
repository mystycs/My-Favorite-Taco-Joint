class CreateMylists < ActiveRecord::Migration
  def change
    create_table :mylists do |t|
      t.integer "res_id", :limit => 8

      t.timestamps null: false
    end
  end
end
