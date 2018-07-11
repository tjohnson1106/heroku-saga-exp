import React, { PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  CameraRoll,
  Image,
  FlatList,
  ActivityIndicator,
  Dimensions
} from "react-native";

const MAX_PHOTOS = 20;
const PADDING = 17;
const MARGIN = 10;

const { width } = Dimensions.get("window");

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
      images: [...this.state.images, ...res.edges],
      loading: false
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
        numColumns={3}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

const styles = StyleSheet.create({
  imageWrapper: {
    width: (width - PADDING * 2 - MARGIN) / 3,
    height: (width - PADDING * 2 - MARGIN) / 3,
    borderRadius: 3,
    marginVertical: "2.5%",
    marginHorizontal: MARGIN
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
