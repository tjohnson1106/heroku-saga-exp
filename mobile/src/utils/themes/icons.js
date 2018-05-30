import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Platform, PixelRatio } from "react-native";
import { resolve, reject } from "rsvp";

const navIconSize =
  __DEV__ === false && Platform.OS === "android"
    ? PixelRatio.getPixelSizeForLayoutSize(25)
    : 25;

const replaceSuffixPattern = /--(active|big|small|very-big)/g;

const icons = {
  home: [navIconSize, Entypo],
  "ios-search": [navIconSize, Ionicons]
};

const iconsMap = {};

const iconsLoaded = new Promise((resolve, reject) => {
    new Promise.all(
        Object.keys(icons)
    )
})
