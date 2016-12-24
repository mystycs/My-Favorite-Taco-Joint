class MylistController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    @mylist = Mylist.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @mylist }
    end
  end

  def create
    @mylist = Mylist.new
    @mylist.res_id = params[:res_id]
    if @mylist.save
    end
  end


end
