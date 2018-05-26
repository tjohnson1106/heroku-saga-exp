import { Navigation } from 'react-native-navigation';

import { registerScreens } from "./screens";

registerScreens()

export default class Nav {
    constructor() {
        this._initApp()

    }

    _initApp() {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: "Feeds",
                    screen: "mobile.FeedsScreen",
                    title: "Saga"
                },
                {
                    label: "Explore",
                    screen: "mobile.ExploreScreen",
                    title: "Explore"
                }
            ]
        })

    }
}