// import 'react-native-gesture-handler';
import React from "react";
import { View, Platform } from "react-native";
import AddEntry from "./components/AddEntry";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import History from "./components/History";
import { purple, white, gray } from "./utils/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const tabBarOptions = {
  activeTintColor: Platform.OS === "ios" ? purple : white,
  inactiveTintColor: gray,
  style: {
    backgroundColor: Platform.OS === "ios" ? white : purple,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1
  }
};

const Tabs =
  Platform.OS === "ios"
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 20 }} />
          <NavigationContainer>
            <Tabs.Navigator
              initialRouteName="Add Entry"
              tabBarOptions={ tabBarOptions }
            >
              <Tabs.Screen
                name="History"
                component={History}
                activeTintColor={Platform.OS === "ios" ? purple : white}
                options={{
                  tabBarIcon: () => (
                    <Ionicons name="ios-bookmarks" size={30} color={purple} />
                  )
                }}
              />
              <Tabs.Screen
                name="Add Entry"
                component={AddEntry}
                options={{
                  activeTintColor: Platform.OS === "ios" ? purple : white,
                  tabBarIcon: () => (
                    <FontAwesome name="plus-square" size={30} color={purple} />
                  )
                }}
              />
            </Tabs.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}
