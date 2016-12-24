class CreateMylists < ActiveRecord::Migration
  def change
    create_table :mylists do |t|
      t.integer "res_id"

      t.timestamps null: false
    end
  end
end
