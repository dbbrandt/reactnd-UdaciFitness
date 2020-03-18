import React, { Component } from "react";
import { View, Text } from "react-native";

class EntryDetail extends Component {
  componentDidMount() {
    console.log('EntryDetail here!');

    const { entryId } = this.props.route.params;
    const { navigation } = this.props;

    const year = entryId.slice(0, 4);
    const month = entryId.slice(5, 7);
    const day = entryId.slice(8);
    navigation.setOptions({
      title: `${month}/${day}/${year}`
    })
  };

  render() {
    const { entryId } = this.props.route.params;
    return (
      <View>
        <Text>Entry Detail - {entryId}</Text>
      </View>
    );
  }
}

export default EntryDetail;
