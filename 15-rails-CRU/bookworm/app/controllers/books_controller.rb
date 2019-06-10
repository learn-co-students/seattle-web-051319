class BooksController < ApplicationController
  before_action :set_params, only:[:show, :edit, :update]

  def index
    @books = Book.all
    render :index
  end

  def show
  end

  def new
    @book = Book.new
    render :new
  end

  def create
    @book = Book.new(params)
    byebug
    if @book.save
      redirect_to book_path(@book)
    else
      render :new
    end
  end

  def edit
  end

  def update
  end

  private
  def set_params
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author, :snippet)
  end
end
