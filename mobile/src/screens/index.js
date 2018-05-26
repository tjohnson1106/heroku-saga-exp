import { Navigation } from 'react-native-navigation';

import FeedsScreen from "./FeedsScreen";
import ExploreScreen from "./ExploreScreen";


export const registerScreens = () => {
    Navigation.registerComponent("mobile.FeedsScreen", () => FeedsScreen)
    Navigation.registerComponent("mobile.ExploreScreen", () => ExploreScreen)
}