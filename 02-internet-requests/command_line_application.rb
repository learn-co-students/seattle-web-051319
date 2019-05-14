require 'rest-client'
require 'pry'
require 'json'

REDDIT_URL = "https://reddit.com/.json"
GOOGLE_BOOKS = "https://www.googleapis.com/books/v1/volumes?q="

def get_url_as_json(url)
  response = RestClient.get(url)
  json = JSON.parse(response.body)
  json
end

def view_reddit
  json = get_url_as_json(REDDIT_URL)
  posts = json["data"]["children"]
  posts.each do |post|
    puts post["data"]["title"]
  end
end

def search_google_books
  puts "what book do you want to search for? "
  query = gets.chomp

  results = get_url_as_json(GOOGLE_BOOKS + query)
  results["items"].each do |book|
    year = book["volumeInfo"]["publishedDate"]
    title = book["volumeInfo"]["title"]
    authors = book["volumeInfo"]["authors"].join(",")

    puts "(#{year}) #{title}"
    puts "by #{authors}"
    puts
  end

  return results
end

def main()
  is_running = true
  while is_running
    puts
    puts "enter a number for a menu option:"
    puts "1. view reddit homepage"
    puts "2. search google books"
    puts "3. quit"
    choice = gets.chomp  
    if choice == "1"
      view_reddit
    elsif choice == "2"
      search_google_books
    elsif choice == "3" || choice == "q"
      is_running = false
    end
  end

  puts "Goodbye!"
end

main()