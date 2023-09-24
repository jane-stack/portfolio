class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image
end
