import React, { PureComponent } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class Comment extends PureComponent {
  render() {
    return (
      <View style={styles.root}>
        <View>{}</View>
        <View>{}</View>
        <View>{}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 50
  },
  avatarWrapper: {},
  contentWrapper: {},
  buttonWrapper: {}
});

export default Comment;
