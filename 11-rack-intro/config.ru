# Rack provides a minimal interface between webservers that support Ruby and Ruby frameworks.
#
# To use Rack, provide an "app":
#an object that responds to the call method,
#taking the environment hash as a parameter, and returning an Array with three elements:
#
# The HTTP response code
# A Hash of headers
# The response body, which must respond to each
require 'rack'
require 'pry'

class App
  def call(environment_hash)
    body_content = []
    request = Rack::Request.new(environment_hash)
    response = Rack::Response.new
    # binding.pry
    if request.path
      response.write("Welcome to flatiron school #{request.path}.")
    else
      response.write("Does not exist yet")
    end
    response.finish
    # [200,{},body_content]
  end
end

run App.new
