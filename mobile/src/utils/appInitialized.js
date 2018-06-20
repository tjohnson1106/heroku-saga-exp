import { AsyncStorage } from "react-native";

import { iconsLoaded } from "../utils/themes";
import { startLogin, startMainApp } from "../Nav";

export default async function appInitialized() {
  await iconsLoaded();
  const token = await AsyncStorage.getItem("@mobile/token");
  //insert bang to return to login
  if (token) {
    startLogin();
  } else {
    startMainApp();
  }
}
