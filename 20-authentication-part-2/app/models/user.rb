class User < ApplicationRecord
  validates :username, presence: true
  validates :username, length: { in: 5..25 }
  validates :username, uniqueness: true

  has_secure_password

  # def password=(password)
  #   self.password = (Digest::SHA256.base64digest(password))
  # end
  #
  # def authenticate?(password)
  #   (Digest::SHA256.base64digest(password) == self.password)
  # end
end
