class ApplicationController < ActionController::API
    # include ActionController::Cookies

    # def logged_in?
    #     session[:user_id]
    # end

    # def current_user
    #     user = User.find_by_id(session[:user_id])
    # end

    # def authorize
    #     render json: {errors: ["Log in to continue"]}, status: :unauthorized unless logged_in?
    # end

    # def authorize_user_resource(user_id)
    #     render json: {errors: ["You do not have permission"]}, status: :unauthorized unless user_id == current_user.id
    # end
end
