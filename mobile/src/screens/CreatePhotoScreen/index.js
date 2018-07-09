import React, { PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  CameraRoll,
  Image,
  FlatList,
  ActivityIndicator
} from "react-native";

const MAX_PHOTOS = 20;

class CreatePhotoScreen extends PureComponent {
  state = {
    images: [],
    loading: false
  };

  componentDidMount() {
    this._getPhotos;
  }

  _getPhotos = async after => {
    this.setState({
      loading: true
    });
    const res = await CameraRoll.getPhotos({
      first: MAX_PHOTOS,
      after
    });

    this.setState({
      images: [...this.state.images, ...res.edges]
    });
    console.log("res", res);
  };

  _renderItem = ({ item }) => {
    return (
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.node.image.uri }} style={styles._image} />
      </View>
    );
  };

  _keyExtractor = item => item.node.image.filename;

  render() {
    if (this.state.loading) {
      return (
        <View style={loadingWrapper}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <FlatList
        data={this.state.images}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

const styles = StyleSheet.create({
  imageWrapper: {
    width: 100,
    height: 100
  },
  image: {
    flex: 1
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CreatePhotoScreen;
