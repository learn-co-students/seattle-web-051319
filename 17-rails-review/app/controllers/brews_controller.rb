class BrewsController < ApplicationController
    before_action :find_brew , only:[:show, :edit, :update, :destroy]

  def index
    @brews = Brew.all
  end
  # the brew show page should display a
  # list of all of the customers who have enjoyed that brew
  def show
    @brew_purchases = @brew.purchases
  end

  def new
    @brew = Brew.new
  end

  def create
    @brew = Brew.new(brew_params)
    if @brew.save
      redirect_to @brew
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @brew.update(brew_params)
      redirect_to @brew
    else
      render :edit
    end
  end

  def strongest
    # @strongest = 0
    # Brew.all.each do |brew|
    #
    # end
    @strongest_brew = Brew.all.max{|a,b| a.strength <=> b.strength}
    byebug
  end

  def destroy
    @brew.destroy
    byebug
    redirect_to brews_path
  end

  private
  def brew_params
    params.require(:brew).permit(:strength, :blend_name, :origin, :notes)
  end

  def find_brew
    @brew = Brew.find(params[:id])
  end
end
