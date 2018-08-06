import React, { PureComponent } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

class CommentsScreen extends PureComponent {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Text>Comments Screen Id: {this.props.photoId}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

export default CommentsScreen;
