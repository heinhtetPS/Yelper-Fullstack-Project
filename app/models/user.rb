# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, presence: true
  validates :password_digest, presence: { message: 'Password can\'t be blank' }
  validates :password, length: { minimum: 6, allow_nil: true }
  attr_reader :password
  after_initialize :ensure_session_token

  #Do ASSOCS here when other tables are migrated

  #Used to find user object in DB
  def self.find_by_credentials(username, raw_pass)
    user = User.find_by(name: username)
    if user && user.is_password?(raw_pass)
      return user
    else
      return nil
    end
  end

  #Required for auth session, generates random token
  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  #used to refresh session
  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  #used to check raw pass against salted/hashed digest
  def is_password?(raw_pass)
    BCrypt::Password.new(self.password_digest).is_password?(raw_pass)
  end

  #Used to generate salted/hashed digest
  def password=(raw_pass)
    @password = password
    self.password_digest = BCrypt::Password.create(raw_pass)
  end


  private
  #used to make sure session_token exists
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
