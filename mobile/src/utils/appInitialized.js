import { AsyncStorage } from "react-native";

import { iconsLoaded } from "../utils/themes";
import { authToken } from "../utils/constants";
import { startLogin, startMainApp } from "../Nav";

export default async function appInitialized() {
  await iconsLoaded();

  const token = await AsyncStorage.getItem(authToken);
  // const token = await AsyncStorage.removeItem(authToken);

  //insert and remove bang to return to login
  if (!token) {
    startLogin();
  } else {
    startMainApp();
  }
}
