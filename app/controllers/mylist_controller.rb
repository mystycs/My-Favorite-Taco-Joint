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
      redirect_to mylist_path(@mylist)
    else
      render :new
      render json: @mylist.errors
    end
  end

  def show
    @mylist = Mylist.find(params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @mylist }
    end

  end


end
