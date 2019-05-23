require 'bundler'
Bundler.require

require_all 'lib'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: "db/development.sqlite"
)
  
ActiveRecord::Base.logger = Logger.new(STDOUT)

# provide manual overrrides of abnormal pluralizations
ActiveSupport::Inflector.inflections do |inflect|
  inflect.irregular 'moose', 'moose'
end