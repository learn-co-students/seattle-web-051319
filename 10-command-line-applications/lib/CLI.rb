class CLI
  def initialize
  end

  def run
    puts "Welcome to the Reddit CLI!"
    present_menu
  end

  def present_menu
    is_running = true
    while is_running
      print_menu_prompt
      choice = STDIN.gets.chomp.to_i
      if choice == 1
        view_frontpage
      elsif choice == 2
        view_subreddit
      elsif choice == 3
        is_running = false
      end
    end
  end
  
  def print_menu_prompt
    puts
    puts "Enter a choice:"
    puts "1. Browse front page"
    puts "2. Browse subreddit"
    puts "3. quit"
  end

  def view_frontpage
    posts = Reddit.get_frontpage
    print_posts(posts)
  end

  def view_subreddit
    puts "enter a subreddit"
    subreddit = STDIN.gets.chomp
    posts = Reddit.get_subreddit(subreddit)
    print_posts(posts)
  end

  def print_posts(posts)
    posts.each do |post|
      puts post
    end
  end
end