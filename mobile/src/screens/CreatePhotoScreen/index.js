import React, { PureComponent } from "react";
import { StyleSheet, Text, View, CameraRoll, Image } from "react-native";

const MAX_PHOTOS = 20;

class CreatePhotoScreen extends PureComponent {
  state = {
    images: []
  };

  componentDidMount() {
    this._getPhotos;
  }

  _getPhotos = async () => {
    const res = await CameraRoll.getPhotos({
      first: MAX_PHOTOS,
      after
    });

    this.setState({
      images: [...this.state.images, res.edges]
    });
  };

  _renderItem = ({ item }) => {
    return (
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.node.image.uri }} style={styles._image} />
      </View>
    );
  };

  render() {
    return (
      <View>
        <Text>Photo Screen</Text>
      </View>
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
  }
});

export default CreatePhotoScreen;
