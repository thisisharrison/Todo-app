class Tag < ApplicationRecord
    validates :name, presence: true 
    has_many: :taggings,
        dependent: :destroy
end
