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

  alias Server.Posts.Comment

  @doc """
  Returns the list of photo_comments.

  ## Examples

      iex> list_photo_comments()
      [%Comment{}, ...]

  """
  def list_photo_comments do
    Repo.all(Comment)
  end

  @doc """
  Gets a single comment.

  Raises `Ecto.NoResultsError` if the Comment does not exist.

  ## Examples

      iex> get_comment!(123)
      %Comment{}

      iex> get_comment!(456)
      ** (Ecto.NoResultsError)

  """
  def get_comment!(id), do: Repo.get!(Comment, id)

  @doc """
  Creates a comment.

  ## Examples

      iex> create_comment(%{field: value})
      {:ok, %Comment{}}

      iex> create_comment(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_comment(attrs \\ %{}) do
    %Comment{}
    |> Comment.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a comment.

  ## Examples

      iex> update_comment(comment, %{field: new_value})
      {:ok, %Comment{}}

      iex> update_comment(comment, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_comment(%Comment{} = comment, attrs) do
    comment
    |> Comment.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Comment.

  ## Examples

      iex> delete_comment(comment)
      {:ok, %Comment{}}

      iex> delete_comment(comment)
      {:error, %Ecto.Changeset{}}

  """
  def delete_comment(%Comment{} = comment) do
    Repo.delete(comment)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking comment changes.

  ## Examples

      iex> change_comment(comment)
      %Ecto.Changeset{source: %Comment{}}

  """
  def change_comment(%Comment{} = comment) do
    Comment.changeset(comment, %{})
  end
end
