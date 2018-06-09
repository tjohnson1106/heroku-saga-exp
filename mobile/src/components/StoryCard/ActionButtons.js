import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Evilicons from "react-native-vector-icons/EvilIcons";

import { makeHitSlop } from "../../utils/themes/metrics";

class ActionButtons extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.actionWrapper}>
          <TouchableOpacity hitSlop={makeHitSlop(20)} style={styles.action}>
            <Ionicons name="ios-heart-outline" size={30} />
          </TouchableOpacity>
          <TouchableOpacity hitSlop={makeHitSlop(20)} style={styles.action}>
            <Evilicons name="comment" size={35} />
          </TouchableOpacity>
          */}
        </View>
        <View style={styles.fakeView} />
        <TouchableOpacity hitSlop={makeHitSlop(20)} style={styles.bookmarkWrapper}>
          <Evilicons name="retweet" size={35} />
        </TouchableOpacity>
        <View>{}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 50,
    paddingHorizontal: 16,
    flexDirection: "row"
  },
  actionWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },

  action: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  fakeView: {
    flex: 1.6
  },
  bookmarkWrapper: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "flex-end"
  }
});

export default ActionButtons;
