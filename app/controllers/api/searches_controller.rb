class SearchController < ApplicationController
def index
   if params[:searchterm].present?
     @allbusiness = Business.search(params[:query])
   else
     @allbusiness = Business.all
   end
 end
end
