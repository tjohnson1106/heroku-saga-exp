import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

import Header from "./Header";
import ActionButtons from "./ActionButtons";

class StoryCard extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Header />
        <Image
          style={styles.img}
          source={{
            uri:
              "https://res.cloudinary.com/bracket-factory/image/upload/v1528082073/abstract_V04.jpg"
          }}
        />
        <ActionButtons />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    minHeight: 800,
    paddingBottom: 10
  },
  img: {
    flex: 1
  }
});

export default StoryCard;
