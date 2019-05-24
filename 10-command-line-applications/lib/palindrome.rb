class Palindrome
  def self.is_palindrome(str)
    left_index = 0
    right_index = str.length - 1
    alphabet = "qwertyuiopasdfghjklzxcvbnm"
    while left_index < right_index
      left_letter = str[left_index].downcase
      right_letter = str[right_index].downcase
      if !alphabet.include?(left_letter)
        left_index += 1
      elsif !alphabet.include?(right_letter)
        right_index -= 1
      elsif left_letter == right_letter
        left_index += 1
        right_index -= 1
      else
        return false
      end
    end
    return true
  end
end