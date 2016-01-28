class UsersController < ApplicationController
  #skip_before_action :require_login, only: [:new, :create]
	def new
		@user = User.new
	end

  def create
  	user = User.new(params[:user])
  	response = user.create
  	if response.parsed_response["status"] == :created

  	end
  end

  private

  def user_params
		params.require(:user).permit(:email, :password, :password_confirmation, :nickname)
	end
end
