defmodule ServerWeb.Resolvers.Accounts do
  def login(_, %{token: token, provider: provider}, _) do
    case provider do
      :facebook ->
        {:ok, user} = ServerWeb.Authentication.login(token, "facebook")
    end
  end
end
