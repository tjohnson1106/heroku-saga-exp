import React, { PureComponent } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Divider } from "../../components";
import { colors } from "../../utils/themes";

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
      <TouchableOpacity style={styles.root} onPress={Keyboard.dismiss}>
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
                  underlineColorAndroid="rgba( 0. 0. 0. 0 )"
                />
              </View>
            </ImageBackground>
          </View>
        </View>
        <Divider />
        <TouchableOpacity style={styles.listItem}>
          <View>
            <Text>Tags</Text>

            <Ionicons name="ios-arrow-forward" size={20} color={colors.lightGray} />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
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
  },
  listItem: {
    height: 40,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    flexDirection: "row"
  }
});

export default OnboardPhotoScreen;
