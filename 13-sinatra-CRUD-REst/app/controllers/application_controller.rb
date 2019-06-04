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

  get '/books/new' do
    erb :new
  end

  patch '/books/:id' do
    byebug
    @book = Book.find(params[:id])
    @book.update(title: params[:title], author: params[:author], snippet: params[:snippet])
    redirect to "/books/#{@book.id}"
  end

  post '/books' do
    @book = Book.create(params)
    # @book = Book.create(title: params[:title], author: params[:author], snippet: params[:snippet])
    redirect to '/books'
    # byebug
  end

  get '/books/:id/edit' do
    # byebug
    @book = Book.find(params[:id])
    erb :edit
  end

  #show => books/:id
  get '/books/:id' do
    # byebug
    # params[:id]
    @book = Book.find(params[:id])
    erb :show
    # byebug
  end

  delete '/books/:id' do
   @book = Book.find(params[:id])
   @book.delete
   redirect to '/books'
 end

end
