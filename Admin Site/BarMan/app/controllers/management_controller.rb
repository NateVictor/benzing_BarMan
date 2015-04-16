class ManagementController < ApplicationController
	def launch
	end
	def signup
	end
	def login
		redirect_to :action => "profile"
	end
	def profile
	end
end