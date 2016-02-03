class StoreController < ApplicationController

	def index
		@products = Product.get_all(params[:category])
	end
end
