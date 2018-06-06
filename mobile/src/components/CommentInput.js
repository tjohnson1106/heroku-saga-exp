import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { iOSColors } from "react-native-typography";

import { fakeAvatar } from "../utils/constants";
import { makeHitSlop, makeCircle } from "../utils/themes";

class CommentInput extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.avatarWrapper}>
          <Image source={{ uri: fakeAvatar }} style={styles.avatar} />
        </View>
        <TouchableOpacity hitSlop={makeHitSlop(20)} style={styles.inputWrapper}>
          {}
        </TouchableOpacity>
      </View>
    );
  }
}

export default CommentInput;

const styles = StyleSheet.create({
  root: {
    minHeight: 50,
    flexDirection: "row"
  },
  avatarWrapper: {
    flex: 0.1,
    backgroundColor: "yellow"
  },
  avatar: {
    ...makeCircle(30)
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: "blue"
  }
});
