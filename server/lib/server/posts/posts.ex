defmodule Server.Posts do
  @moduledoc """
  The Posts context.
  """

  import Ecto.Query, warn: false
  alias Server.Repo

  alias Server.Posts.Photo

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
end
