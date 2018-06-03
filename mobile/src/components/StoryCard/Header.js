import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.root}>
      <View style={styles.userMetaWrapper}>
        <View style={styles.avatarWrapper}>{}</View>
      </View>

      <View style={styles.buttonWrapper}>{}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 16
  },
  userMetaWrapper: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "row"
  },
  buttonWrapper: {
    flex: 0.1,
    backgroundColor: "yellow"
  },
  avatarWrapper: {
    flex: 0.25,
    backgroundColor: "pink"
  }
});
