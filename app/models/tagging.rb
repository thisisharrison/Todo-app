class Tagging < ApplicationRecord
    belongs_to :to_do
    belongs_to :tag
end
