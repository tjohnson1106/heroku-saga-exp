import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

class ActionButtons extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.actionWrapper}>
          <TouchableOpacity feedback="opacity" style={styles.action}>
            <Ionicons name="ios-heart-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View>{}</View>
        <View>{}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 50,
    backgroundColor: "red",
    paddingHorizontal: 16
  },
  actionWrapper: {
    flex: 1,
    backgroundColor: "blue"
  },
  action: {
    flex: 1
  }
});

export default ActionButtons;
