class Todo < ApplicationRecord
    validates :title, :body, presence: true
    validates :done, inclusion: { in: [true, false] }
    
    has_many :steps, 
        dependent: :destroy

    has_many :taggings,
        dependent: :destroy

    has_many :tags, 
        through: :taggings,
        source: :tag
end
