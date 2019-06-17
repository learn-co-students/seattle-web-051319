# Discussion
1. What do mean when we say http is stateless.
  - Hyper text transfer protocol.
  - Doesn't persist.
  - Retains no information.
  - keep sending multitudeness info to the server.
  - user holds onto the state.
  - web-browser - url.

2. What are the 3 hash-like structures that Rails provides us.
  - sessions
  - cookies
  - flash

  - params - rack

# Rails Quest
We have a pre-built trivia app which presents the user with questions in succession, and allows them to answer.
We can check in our controller whether the user answered correctly or not, but how can we get the server to 'remember' how many questions a user has answered  correctly for as long as they are on the site?

## Deliverables
* Add a feature which displays the number of questions a user has answered correctly
* Add a message which tells the user whether or not they got the last answer correct

## SWBATs
- What is the difference between a session and cookie.
- Everything after sessions.
- Practicing DRY Principle.
- sessions
- cookies
- flash

## External Resources:
- [Rails Docs on Sessions](https://guides.rubyonrails.org/security.html#sessions)
- [Wiki Page on HTTP Headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
