import React, { Component } from "react";
import { View, Text } from "react-native";

class EntryDetail extends Component {
  render() {
    const { entryId } = this.props.route.params;
    return (
      <View>
        <Text>
          Entry Detail - { entryId }
        </Text>
      </View>
    );
  }
}

export default EntryDetail;
