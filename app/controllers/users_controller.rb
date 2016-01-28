class UsersController < ApplicationController
  #skip_before_action :require_login, only: [:new, :create]
	def new
		@user = User.new
	end

  def create
  	user = User.new(params[:user])
  	response = user.create.parsed_response
  	if response["status"] == :created
      flash[:notice] =  response["message"]
      redirect_to root_path

    elsif responsee["status"] == :not_acceptable
      flash[:notice] =  response["message"]
      @user = User.new
      @user.errors = response["errors"]
      render "new"
  	end
  end

  private

  def user_params
		params.require(:user).permit(:email, :password, :password_confirmation, :nickname)
	end
end
