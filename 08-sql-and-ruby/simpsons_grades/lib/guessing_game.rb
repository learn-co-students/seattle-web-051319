class GuessingGame
  def initialize
    @number = rand(1..100)
    @guesses = 0
  end

  def play
    has_guessed = false
    while !has_guessed
      @guesses += 1
      puts "guess: "
      guess = STDIN.gets.chomp.to_i
      if guess == @number
        has_guessed = true
      elsif guess < @number
        puts "higher!"
      else
        puts "lower!"
      end
    end

    puts "correct!!"
    puts "you got it in #{@guesses} guesses"
  end
end