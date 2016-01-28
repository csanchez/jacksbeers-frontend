
class User 

	include ActiveModel::Model
	include ActiveModel::Validations
  	#authenticates_with_sorcery!
  	attr_accessor :nickname, :email, :password,:password_confirmation
  	

  	validates :nickname, length: { minimum: 3 }
  	validates :password, length: { minimum: 3 }
  	validates :password, confirmation: true
  	validates :password_confirmation, presence: true
  	validates :email, presence: true
	#validates :email, uniqueness: true, email_format: { message: 'has invalid format' }
	#validates :first_name, :presence => true
  	#  validates :last_name, :presence => true

  	#for httparty
	include HTTParty  	
  	base_uri 'http://localhost:3001'
  	default_params :output => 'json'
  	format :json

  	def authenticate
		User.authenticate(email,password)
	end

	def create
		User.create_user_with_webservice(nickname,email,password,password_confirmation)
	end


	def self.create_user_with_webservice(nickname,email,password,password_confirmation)
		post("/api/v1/users.json",:query => {user:{nickname:"#{nickname}", email: "#{email}", password: "#{password}",password_confirmation:"#{password_confirmation}"}})
	end

	def self.authenticate(email,password)
		post("/api/v1/authenticate.json",:query => { email: "#{email}", password: "#{password}"})
	end



  	def full_name
       "#{first_name} #{last_name}"
    end
  
     def short_name
       "#{first_name} #{last_name[0,1]}"
     end


end
