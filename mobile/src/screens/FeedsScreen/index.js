import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { StoryCard } from "../../components";

class FeedsScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <StoryCard />
      </ScrollView>
    );
  }
}

const getPhotos = gql`
  query {
    photos {
      id
      imageUrl
      caption
    }
  }
`;

export default graphql(getPhotos)(FeedsScreen);
