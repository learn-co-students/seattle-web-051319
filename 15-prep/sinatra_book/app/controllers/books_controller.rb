class BooksController < ApplicationController

  get '/books' do
    @books = Book.all
    erb :'books/index'
  end

  get '/books/new' do
    @authors = Author.all
    erb :'books/new'
  end

  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :'books/show'
  end

  get '/books/:id/edit' do
    @book = Book.find(params[:id])
    erb :'books/edit'
  end

  post '/books' do
    @book = Book.create(params)
    redirect "/books/#{@book.id}"
  end

  patch '/books/:id' do
    @book = Book.find_by_id(params[:id])
    @book.update(snippet: params[:snippet])
    redirect "/books/#{@book.id}"
  end

  delete '/books/:id' do
    @book = Book.find(params[:id])
    @book.delete
    redirect "/books"
  end

end
