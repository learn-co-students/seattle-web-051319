class AnimalsController < ApplicationController
	def index
		@animals = Animal.all
		respond_to do |format|
			format.html { render :index }
			format.json { render :json => @animals, include: :species }
		end
  end

	def show
		@animal = Animal.find(params[:id])
  end

	def new
		@animal = Animal.new
		@species = Species.all
  end

	def create
		@animal = Animal.create(animal_params)
		redirect_to animals_path
	end
	
	def home
	end

	private
	def animal_params
		params.require(:animal).permit(:name, :age, :species_id)
	end
end
