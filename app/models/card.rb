class Card < ActiveRecord::Base
  belongs_to :list
  default_scope { order("rank DESC") }
end
