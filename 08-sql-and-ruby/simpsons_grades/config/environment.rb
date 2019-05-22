require 'pry'
require 'sqlite3'

DB = {
  conn: SQLite3::Database.new('db/simpsons.db')
}

DB[:conn].results_as_hash = true

require_relative '../lib/course'
require_relative '../lib/student'
require_relative '../lib/enrollment'
require_relative '../lib/guessing_game'