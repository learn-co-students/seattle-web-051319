class PurchasesController < ApplicationController
      before_action :find_purchase , only:[:show, :edit, :update]

    def index
      @purchases = Purchase.all
    end

    def show
    end

    def new
      @purchase = Purchase.new
    end

    def create
      @purchase = Purchase.new(purchase_params)
      if @purchase.save
        redirect_to @purchase
      else
        render :new
      end
    end

    def edit
    end

    def update
      if @purchase.update(purchase_params)
        redirect_to @purchase
      else
        render :edit
      end
    end

    private
    def purchase_params
      params.require(:purchase).permit(:customer_name, :price, :brew_id, :size, :creamer_strength, :special_instructions)
    end

    def find_purchase
      @purchase = Purchase.find(params[:id])
    end
  end
