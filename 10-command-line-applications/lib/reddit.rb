class Reddit
  def self.get_frontpage
    get_subreddit('all')
  end

  def self.get_subreddit(subreddit)
    response = RestClient.get("http://reddit.com/r/#{subreddit}/.json?apikey=#{API_KEY}")
    json = JSON.parse(response)["data"]["children"]
    posts = json.map do |item|
      item["data"]
    end
    posts.map do |post|
      post["title"]
    end
  end
end