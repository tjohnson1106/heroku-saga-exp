defmodule ServerWeb.Oauth.Facebook do
  @fields "id,email,first_name,last_name"

  def get_info(token) do
    token
    |> get_user
    |> get_user_profile_picture("small", token)
  end

  def get_user(token) do
    {:ok, user} = Facebook.me([fields: @fields], token)
    user
  end

  defp get_user_profile_picture(user, size, token) do
    {:ok, data} = Facebook.picture(user["id"], size, token)
    [user, data]
  end
end
