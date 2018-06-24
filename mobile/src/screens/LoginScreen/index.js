import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity
} from "react-native";
import { iOSColors } from "react-native-typography";
import LinearGradient from "react-native-linear-gradient";

import { fonts } from "../../utils/themes/fonts";

const COLORS_GRADIENTS = ["#4286f4", "#373b44"];

class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <StatusBar style="light-content" />
        <LinearGradient
          //left to right
          start={{
            x: 0.0,
            y: 0.0
          }}
          end={{
            x: 1.0,
            y: 1.0
          }}
          colors={COLORS_GRADIENTS}
          style={styles.header}
        >
          <Text style={styles.appName}>Saga Beta</Text>
        </LinearGradient>
        <View style={styles.content}>
          <View style={styles.section}>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.input} placeholder="Email" />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.input} placeholder="Password" />
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
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
    alignSelf: "stretch"
  },
  appName: {
    color: iOSColors.white,
    fontSize: 50,
    fontFamily: fonts.sunflower
  },
  section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputWrapper: {
    height: 45,
    width: "90%",
    backgroundColor: "#FAF9F9",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    marginBottom: 10,
    padding: 10
  },
  input: {
    flex: 1
  },
  loginButton: {
    height: 45,
    width: "90%",
    borderRadius: 5,
    backgroundColor: "#318DEE70",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButtonText: {
    color: iOSColors.white
  }
});

export default LoginScreen;
