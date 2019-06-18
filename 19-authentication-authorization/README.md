## Objectives
- Understand, theoretically how authentication works
- Understand theoretically how authorization work
- Implement Sign in vs sign up
- Review sessions, cookies
- Implement log in, and log out

## Authentication && Authorization
1. What is authentication?
2. What is authorization?

- encryption
  - Changing data that you're storing
  - different format
  - still can reference late.
  - encryption key that will code that value into a hash.
- Discuss different encryption and hashing schemes
  - For Example :  `Digest::SHA256.base64digest`
    - deterministic: same input => same output
- introduce `bcrypt`
  - `has_secure_password` macro
- Augment a user model in rails using `bcrypt`

## User Stories
1. As a registered user, I should be able to log in by providing my username.
  - What model(s) do I need?
  - What route(s) do I need?
  - What controller action(s) do I need?
  - What view(s) do I need?

2. I should be able to add a password to my site and validate user. (at the end of lecture if we have time).
  - What model(s) do I need?
  - What route(s) do I need?
  - What controller action(s) do I need?
  - What view(s) do I need?

## Part 2 - Authorization

1. As an un-authenticated user, I should not be able to see a list of students and information about an individual student.

  - What model(s) do I need?
  - What route(s) do I need?
  - What controller action(s) do I need?
  - What view(s) do I need?

2. As an authenticated user I should be able see a list of students and information about an individual student plus create a new student.
  - What model(s) do I need?
  - What route(s) do I need?
  - What controller action(s) do I need?
  - What view(s) do I need?

3. If an un-authenticated user tries to see the new student form, they should be redirected to the login page.
  - What model(s) do I need?
  - What route(s) do I need?
  - What controller action(s) do I need?
  - What view(s) do I need?

## Resources
##### Password Authentication Guidelines

- install gem `bcrpy`
- you don't store passwords as plain text
  - add a password_digest column.
  - add `has_secure_password` to the model with the password.
- at signin use the bcrypt authenticate method to confirm that the password matches
- password hashing is one-way encryption (we never decrypt it)


- [Digest](https://ruby-doc.org/stdlib-2.2.1/libdoc/digest/rdoc/Digest.html)
- [BCrypt](https://github.com/codahale/bcrypt-ruby)
