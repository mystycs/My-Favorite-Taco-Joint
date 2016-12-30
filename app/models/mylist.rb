class Mylist < ActiveRecord::Base
  def to_param
     res_id
   end
end
