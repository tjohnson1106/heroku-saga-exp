import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { human, iOSColors } from "react-native-typography";

import Header from "./Header";
import ActionButtons from "./ActionButtons";
import Meta from "./Meta";
import CommentInput from "../CommentInput";

class StoryCard extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Header />
        <Image
          style={styles.img}
          source={{
            uri: this.props.data.imageUrl
          }}
        />
        <ActionButtons />
        <Meta />
        <View style={styles.commentsWrapper}>
          <TouchableOpacity>
            <Text style={styles.commentViewAll}>View all 14 comments</Text>
          </TouchableOpacity>
          <CommentInput />
        </View>
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
  },
  commentsWrapper: {
    height: 50,
    paddingHorizontal: 16
  },
  commentViewAll: {
    ...human.calloutObject,
    color: iOSColors.midGray
  }
});

export default StoryCard;
