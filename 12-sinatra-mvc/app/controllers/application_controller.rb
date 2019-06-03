class ApplicationController < Sinatra::Base
  set :views, 'app/views'

  get '/' do
    "Hello World"
  end

  # index => html for a header /books
  # List of all the books that we have.
  # SELECT * from books
  get '/books' do
    @books = Book.all
    erb :index
  end

  #show => books/:id
  get '/books/:id' do
    # byebug
    # params[:id]
    @book = Book.find(params[:id])
    erb :show
    # byebug
  end

end
