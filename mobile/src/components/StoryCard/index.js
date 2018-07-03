import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { human, iOSColors } from "react-native-typography";
import { graphql } from "react-apollo";

import Header from "./Header";
import ActionButtons from "./ActionButtons";
import Meta from "./Meta";
import CommentInput from "../CommentInput";
import { likePhoto } from "../../graphql/mutations";

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
        <Meta caption={this.props.data.caption} />
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
    minHeight: 700,
    paddingBottom: 10,
    backgroundColor: "#282e45",
    // backgroundColor: "#fff",
    flex: 1,
    borderWidth: 4,
    borderColor: "#191414",
    margin: 5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
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

export default graphql()(StoryCard);
