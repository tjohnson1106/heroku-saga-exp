import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { iOSColors } from "react-native-typography";

//create app name view 06192018

class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <Text style={styles.appName}>Saga Beta</Text>
        </View>
        <View style={styles.content}>
          <Text>Hello</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    flex: 0.3,
    backgroundColor: "purple",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    flex: 1,
    backgroundColor: "blue",
    alignSelf: "stretch"
  },
  appName: {
    color: iOSColors.white,
    fontSize: 50
  }
});

export default LoginScreen;
