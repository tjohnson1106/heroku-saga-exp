import React, { PureComponent } from "react";
import { View, Image, StyleSheet, TextInput } from "react-native";

class OnboardPhotoScreen extends PureComponent {
  render() {
    console.log("this.props", this.props);
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <View style={styles.imageWrapper}>
            <Image style={styles.img} source={{ uri: this.props.image.node.image.uri }} />
          </View>
          <View style={styles.onboardWrapper}>{}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  header: {
    height: 150,
    flexDirection: "row"
  },
  imageWrapper: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    height: 200,
    width: 140
  },
  onboardWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  }
});

export default OnboardPhotoScreen;
