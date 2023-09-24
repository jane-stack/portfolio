class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :post_file
end
