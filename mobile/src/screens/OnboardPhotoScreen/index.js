import React, { PureComponent } from "react";
import { View, ImageBackground, StyleSheet, TextInput } from "react-native";

class OnboardPhotoScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      caption: ""
    };
  }

  _onCaptionChange = caption => {
    this.setState({ caption });
  };

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <View style={styles.imageWrapper}>
            <ImageBackground
              style={styles.img}
              source={{ uri: this.props.image.node.image.uri }}
            >
              <View style={styles.onboardWrapper}>
                <TextInput
                  placeholder="Say something here..."
                  style={styles.onboardInput}
                  multiline
                  value={this.state.caption}
                  onChangeText={this._onCaptionChange}
                  //remember for android
                  underlineColorAndroid="rgba( 0. 0. 0. 0.3 )"
                />
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#3D5099"
  },
  header: {
    height: 150,
    flexDirection: "row"
  },
  imageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    borderColor: "black",
    borderWidth: 1,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  img: {
    height: "100%",
    width: "100%"
  },
  onboardWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  onboardInput: {
    width: "100%",
    paddingVertical: 10,
    paddingRight: 10,
    height: 100,
    color: "black"
  }
});

export default OnboardPhotoScreen;
