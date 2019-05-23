require 'bundler'
Bundler.require

require_relative '../bin/run'
require_all 'lib'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3', # postgres, mysql, MongoDB
  database: "db/development.sqlite"
)
  
# provide manual overrrides of abnormal pluralizations
ActiveSupport::Inflector.inflections do |inflect|
  inflect.irregular 'qqqzzz', 'steve!!'
end

ActiveRecord::Base.logger = Logger.new(STDOUT)