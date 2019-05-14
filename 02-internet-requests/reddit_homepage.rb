require 'rest-client'
require 'json'
require 'pry'

def display_post(post, index)
  ups = post["data"]["ups"]
  downs = post["data"]["downs"]
  votes = "(#{ups}/#{downs})"
  title = post["data"]["title"][0..20]
  puts "#{index}. #{votes} #{title}"
end

response = RestClient.get('http://reddit.com/.json')
json = JSON.parse(response.body)
posts = json["data"]["children"]

puts "All posts:"
posts.each.with_index do |post, index|
  display_post(post, index)
end

puts
puts "Posts under 10,000 upvotes:"

low_votes = posts.filter do |post|
  post["data"]["ups"] < 10000
end

low_votes.each.with_index do |post, index|
  display_post(post, index)
end

# .each - visits each element in the array
# .map - transforms each element in the array
#        into exactly 1:1 new thing
# .filter - returns a new array containing
#           only elements that match a criteria
# .select - synonym for .filter