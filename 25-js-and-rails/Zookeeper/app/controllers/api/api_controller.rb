class Api::ApiController < ApplicationController
	def animals
		render :json => Animal.all, include: :species
	end
end