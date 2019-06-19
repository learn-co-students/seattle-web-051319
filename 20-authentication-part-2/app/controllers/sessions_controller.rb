class SessionsController <ApplicationController
  # if a user is logged in.
  def login
  end

  def create
    # byebug
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to root_path
    else
      flash[:message] = "Invalid login. Please try again."
      render :login
    end
    # session[:username] = params[:user][:username]
  end

  def destroy
    session.clear
    redirect_to login_path
  end
end
