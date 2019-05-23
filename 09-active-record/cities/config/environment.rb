require 'bundler'
Bundler.require

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: "db/development.sqlite"
)
  
ActiveRecord::Base.logger = Logger.new(STDOUT)

ActiveSupport::Inflector.inflections do |inflect|
  inflect.irregular 'qqqzzz', 'geluso'
end

require_all 'lib'