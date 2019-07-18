import React, {Component} from 'react'

export default class Reddit extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      subreddit: 'seattleWA',
      posts: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()
    this.fetchRedditPosts()
  }

  handleChange(ev) {
    this.setState({subreddit: ev.target.value})
  }

  componentDidMount() {
    this.fetchRedditPosts()
  }

  fetchRedditPosts() {
    this.setState({isLoading: true})

    fetch(`https://www.reddit.com/r/${this.state.subreddit}/.json`)
    .then(res => res.json())
    .then(json => {
      let posts = json.data.children.map(post => {
        return post.data
      })
      this.setState({
        isLoading: false,
        posts
      })
    })
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
    return <div>
      <div>
        <form onSubmit={this.handleSubmit}>
          /r/<input type="text" value={this.state.subreddit} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
      <ul>
        {this.state.posts.map(post => {
          return <li key={post.id}>{post.title}</li>
        })}
      </ul>
    </div>
  }
}