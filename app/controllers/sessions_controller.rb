class SessionsController < ApplicationController

    before_action :require_no_user!, only: [:create, :new]

    def new
        render :new
    end

    def create
        user = User.find_by_credentials(*user_params.values)
        if user.nil?
            flash.now[:errors] = ['Incorrect username and/or password']
            render :new
        else 
            login_user!(user)
            redirect_to root_url
        end
    end

    def destroy
        logout_user!(current_user)
        redirect_to new_session_url
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
