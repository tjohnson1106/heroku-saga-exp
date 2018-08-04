defmodule Server.Posts do
  @moduledoc """
  The Posts context.
  """

  import Ecto.Query, warn: false
  alias Server.Repo

  alias Server.Posts.{Photo, Comment}

  def list_photos do
    query = from(p in Photo, order_by: [desc: :inserted_at])
    Repo.all(query)
  end

  def get_photo!(id), do: Repo.get!(Photo, id)

  def create_photo(attrs \\ %{}) do
    %Photo{}
    |> Photo.changeset(attrs)
    |> Repo.insert()
  end

  def update_photo(%Photo{} = photo, attrs) do
    photo
    |> Photo.changeset(attrs)
    |> Repo.update()
  end

  def delete_photo(%Photo{} = photo) do
    Repo.delete(photo)
  end

  def change_photo(%Photo{} = photo) do
    Repo.changeset(photo, %{})
  end

  #   query_params: query_params removed from presign options
  def get_presign_url do
    uuid = UUID.uuid4()
    bucket = "photos"
    config = %{region: "us-east-1"}
    query_params = [{"Content-Type", "image/jpeg"}, {"ACL", "public-read"}]
    presign_options = [virtual_host: false]

    {:ok, url} =
      ExAws.Config.new(:s3, config)
      |> ExAws.S3.presigned_url(:put, bucket, "#{uuid}.jpg", presign_options)

    %{upload_url: url, url: get_image_url(bucket, uuid)}
  end

  defp get_image_url(bucket, uuid) do
    "http://s3.amazonaws.com/saga-beta/#{bucket}/#{uuid}.jpg"
  end

  def list_photo_comments do
    Repo.all(Comment)
  end

  def get_comment!(id), do: Repo.get!(Comment, id)

  def create_comment(attrs \\ %{}) do
    %Comment{}
    |> Comment.changeset(attrs)
    |> Repo.insert()
  end

  def update_comment(%Comment{} = comment, attrs) do
    comment
    |> Comment.changeset(attrs)
    |> Repo.update()
  end

  def delete_comment(%Comment{} = comment) do
    Repo.delete(comment)
  end

  def change_comment(%Comment{} = comment) do
    Comment.changeset(comment, %{})
  end

  def get_comments_for_photos() do
    query = from(c in Comment, where: c.photo_id = ^photo_id, order_by: [desc: :inserted_at])
    Repo.all(query)
  end
end
