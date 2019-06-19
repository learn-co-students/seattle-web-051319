## Objectives
- Understand, theoretically how authentication works
- Understand theoretically how authorization work
- Implement Sign in vs sign up
- Review sessions, cookies
- Implement log in, and log out

## Authentication && Authorization
1. What is authentication?
  - Been allowed to log in
  - who am i.
2. What is authorization?
  - what can I do
  - pages that users can see.
  - actions that users can do on the page.

## User Stories
- [x] As a registered user, I should be able to log in by providing my username.
  - What model(s) do I need?
    - create a user model.
    - user model
  - What route(s) do I need?
    - user login route
      - session -> login
        - not associated with a model currently
        - maybe need a new model TBD
        - at least a controller.
      - get : new
      - post : create
    - logout
      - delete : destroy
    - signup
      - get : new
      - post : create
    - show the username on page.
  - What controller action(s) do I need?
    - session controller
    - user controller
  - [x] What view(s) do I need?
    - new for session - login view
    - new for user - signup view
    - logout can be a button (no view needed)

  - [ ] I should be able to add a password to my site and validate user. (at the end of lecture if we have time).
## Part 2 - Authorization

  - [x] As an un-authenticated user, I should not be able to see a list of students and information about an individual student.
  - [x] I want to go to the login
      - before_action
      - check if they are logged in
      -somehow utilize session[:user_id]
  - [x] As an authenticated user I should be able see a list of students and information about an individual student plus create a new student.
  - [x] If an un-authenticated user tries to see the new student form, they should be redirected to the login page.
---
## Resources
##### Password Authentication Guidelines
- encryption
  - Changing data that you're storing
  - different format.
  - still can reference late.
  - encryption key that will code that value into a hash.
- Discuss different encryption and hashing schemes
  - For Example :  `Digest::SHA256.base64digest`
    - deterministic: same input => same output
- introduce `bcrypt`
  - `has_secure_password` macro
- Augment a user model in rails using `bcrypt`


- install gem `bcrpyt`
- you don't store passwords as plain text
  - add a password_digest column.
  - add `has_secure_password` to the model with the password.
- at signin use the bcrypt authenticate method to confirm that the password matches
- password hashing is one-way encryption (we never decrypt it)
---
- [EditMyCookie](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=en)
- [Digest](https://ruby-doc.org/stdlib-2.2.1/libdoc/digest/rdoc/Digest.html)
- [BCrypt](https://github.com/codahale/bcrypt-ruby)
