class BankAccount
  attr_reader :balance

  def initialize(balance=0)
    @balance = balance
  end

  def withdraw(amount)
    if @balance >= amount
      @balance -= amount
    end
  end

  def deposit(amount)
    @balance += amount
  end

  def balance=(amount)
    @balance = amount
  end

  def to_s
    "$#{@balance}"
  end
end

me = BankAccount.new(800)
bezos = BankAccount.new(800000)

puts me
puts bezos
puts

puts "depositing 350"
me.deposit(350)
puts me
puts

puts "modifying balance"
me.balance = 9999
puts me
puts

require 'pry'
binding.pry