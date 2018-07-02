defmodule Server.Reaction do
  import Ecto.Query, warn: false
  alias Server.Repo

  alias Server.Reaction.LikePhoto

  def list_like_photos do
    Repo.all(LikePhoto)
  end

  def get_like_photo!(id), do: Repo.get!(LikePhoto, id)

  def create_like_photo(attrs \\ %{}) do
    %LikePhoto{}
    |> LikePhoto.changeset(attrs)
    |> Repo.insert()
  end

  def update_like_photo(%LikePhoto{} = like_photo, attrs) do
    like_photo
    |> LikePhoto.changeset(attrs)
    |> Repo.update()
  end

  def delete_like_photo(%LikePhoto{} = like_photo) do
    Repo.delete(like_photo)
  end

  def change_like_photo(%LikePhoto{} = like_photo) do
    LikePhoto.changeset(like_photo, %{})
  end
end
