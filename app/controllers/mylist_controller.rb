class MylistController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :destroy]

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
      render json: {}, status: :no_content
    else
      render :new
      render json: @mylist.errors
    end
  end

  def show
    @mylist = Mylist.all
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @mylist }
    end
  end

  def destroy
    @mylist = Mylist.find_by(res_id: params[:res_id])
    @mylist.destroy
    render json: {}, status: :no_content

  end
end
