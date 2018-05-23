defmodule ServerWeb.Schema do
  use Absinthe.Schema

  alias Server.Web

  query do
  
  @desc   "Get list of photos"
  field: :photos, list_of(:photo) do
    
     resolve &Resolvers.Posts.photo/3

 
  end
  
  

  end
end
