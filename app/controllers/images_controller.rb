class ImagesController < ApplicationController

    # def update
    #     if params[:file]
    #       # The data is a file upload coming from <input type="file" />
    #       @project.post_file.attach(params[:file])
    #       # Generate a url for easy display on the front end 
    #       image = url_for(@project.post_file)
    #     else
    #       # Maybe we want to just store a url or the raw Base64 data
    #       image = image_params[:image]
    #     end
    #       # Now save that url in the profile
    #     if @project.update(image: image)
    #       render json: @project, status: :ok
    #     end
    #   end
end
