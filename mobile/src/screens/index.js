import { Navigation } from "react-native-navigation";

import FeedsScreen from "./FeedsScreen";
import ExploreScreen from "./ExploreScreen";
import LoginScreen from "./LoginScreen";
import CreatePhotoScreen from "./CreatePhotoScreen";

import WithProvider from "../components/WithProvider";

export const registerScreens = () => {
  Navigation.registerComponent("mobile.FeedsScreen", () => WithProvider(FeedsScreen));
  Navigation.registerComponent("mobile.ExploreScreen", () => WithProvider(ExploreScreen));
  Navigation.registerComponent("mobile.LoginScreen", () => WithProvider(LoginScreen));
  Navigation.registerComponent("mobile.CreatePhotoScreen", () =>
    WithProvider(CreatePhotoScreen)
  );
};
