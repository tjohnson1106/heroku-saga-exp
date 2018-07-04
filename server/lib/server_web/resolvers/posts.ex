defmodule ServerWeb.Resolvers.Posts do
  def photos(_, _, _) do
    {:ok, Server.Posts.list_photos()}
  end

  def photo(_, %{id: id}, _) do
    {:ok, Server.Posts.get_photo!(id)}
  end

  def presign_url(_, _, _) do
    {:ok, Server.Posts.get_presign_url()}
  end
end
