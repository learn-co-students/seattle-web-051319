# My CLI App
This CLI is built to have you navigate Reddit in your
terminal.

## Install
Create a file called `config/API_KEY.rb` and go to
the Reddit site to sign up for their API to get your
own key and save it in that file.


1. set up your project structure with config, db, lib, Rakefile, Gemfile
2. set up your gemfile
3. require 'bundler' in config/environment.rb
4. configure database adapter in environment.rb
5. Bundler.require
6. require_all 'lib'
7. require 'sinatra/activerecord/rake' in Rakefile
8. rake db:create_migration
9. use the create_table command in migration
10. rake db:migrate
11. created lib/models/you_class.rb file
12. inherit from ActiveRecord::Base
13. add belongs_to, has_many, has_one, or whatever is appropriate
14. write YourClass.create(name: 'name') in db/seeds.rb
15. rake db:seed
16. set up a binding.pry in a rake task called console
16. run rake console to play around with the classes
