class Project < ApplicationRecord
    has_one_attached :post_file
    belongs_to :user

    # def image_url
    #     Rails.application.routes.url_helpers.url_for(image) if image.attached?
    # end
end
