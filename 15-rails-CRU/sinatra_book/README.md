## SWBATs
## Questions :
  - CRUD -> Sinatra
  - Create :
    - ```GET -> /books/new'```
    - ```POST -> '/books/:id -> '/books'```
  - Read
    - ```GET -> index - '/books'```
    - ```GET -> show - /books/:id```
  - Update
    - ```GET -> edit -> '/books/:id/edit'```
    - ```PATCH( or PUT) -> '/books/:id'```
  - Delete
    - ```GET -> delete -> (button) -> show -> '/books/:id'```
    - ```DELETE -> '/books'```

### High-level development practices
 - [x] Work within a nested file structure for multiple models
    - Conventional view names (index/show/new/edit)
    - Multiple controllers
 - [x] Test controller actions with Postman
    - Manual redirect
 - [x] Know which questions to ask when given a new user story
    1. What new model(s) do I need?
       - New class?
       - New migration? (i.e. does the schema need to change?)
       - Associations?
       - Seeds?
    2. What route(s) do I need?
    3. What controller action(s) do I need?
       - In Sinatra, this means the code directly below the route, but in Rails it will be a separate file
    4. What view(s) do I need?

### ActiveRecord associations

 - [x] Add a new ActiveRecord model and associate it with an existing model
 - [x] Display information about an associated model.
 - [x] Allow the user to make a new instance of an ActiveRecord model that belongs to another model

## Deliverables for today's lecture

- [x] **As a site visitor, I should be able to view a single author.  I should be able to see the author's name and count of books. (For the purpose of this project, an author has many books and a book belongs to one author.)**
  1. Models?
    - No `authors` already exists.
  2. Routes?
    - YES!!!!!! show -> `/authors/:id`
  3. Controller actions?
    - Taking in `author.id`
    - Book Count
      - `find(params[:id])`
      - `books.where(author_id: params[:id])`
  4. Views?
    - `show.erb`


- [x] **As a site visitor, I should be able to see a list of authors**
  1. Models?
    -  Create a new model `author.rb`
    -  Define association between `author` and `book`
    -  New migration `create_authors_table`
    -  New Migration `alter author:string to author_id:integer`
  2. Routes?
    - index -> '/authors'
  3. Controller actions?
    - create an `authors_controller`
    - `@author = Author.all`
  4. Views?
    - set a view for all authors-> index.erb


 - [x] **As a site visitor, I should be able to create a new book and associate it with an existing author. (Note: after the lecture I added a drop-down for doing this.  In lecture we just ended up with the user entering an author ID, which isn't a very nice user experience.)**
   1. Models?
     - No new model books and author exists
   2. Routes?
      - no new routes
      - add author into our forms.
   3. Controller actions?
      - no new controller
   4. Views?
      - no new view.

 ## Resources
 1. Writing a migration to rename column and change column type: http://codkal.com/how-rename-database-column-rails-5-migration/
 2. HTML form elements: https://www.w3schools.com/html/html_form_elements.asp
 3. Another reference for select in HTML : https://www.learnhowtoprogram.com/ruby/ruby-database-basics/select-form-fields-in-sinatra

 If you want a diff view of just the things I changed during the course of the lecture, you can find it at https://github.com/learn-co-students/seattle-web-031119/commit/617909f920447661439340c327d73e374a1981a6
