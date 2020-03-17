// import 'react-native-gesture-handler';
import React from "react";
import { View, Platform } from "react-native";
import AddEntry from "./components/AddEntry";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import History from "./components/History";
import { purple, white } from "./utils/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

// const RouteConfigs = {
//   History: {
//     screen: History,
//     navigationOptions: {
//       tabBarLabel: "History",
//       tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
//     }
//   },
//   AddEntry: {
//     screen: AddEntry,
//     navigationOptions: {
//       tabBarLabel: "Add Entry",
//       tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
//     }
//   }
// };
//
// const Tabs =
//   Platform.OS === "ios"
//     ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
//     : createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);
//
//
// const TabNavigatorConfig = {
//   navigationOptions: {
//     header: null
//   },
//   tabBarOptions: {
//     activeTintColor: Platform.OS === "ios" ? purple : white,
//     style: {
//       height: 56,
//       backgroundColor: Platform.OS === "ios" ? white : purple,
//       shadowColor: "rgba(0, 0, 0, 0.24)",
//       shadowOffset: {
//         width: 0,
//         height: 3
//       },
//       shadowRadius: 6,
//       shadowOpacity: 1
//     }
//   }
// };

const Tabs = Platform.OS === "ios" ?
  createBottomTabNavigator()
  : createMaterialTopTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 20 }} />
          <NavigationContainer>
            <Tabs.Navigator>
              <Tabs.Screen name='History' component={History}/>
              <Tabs.Screen name='Add Entry' component={AddEntry}/>
            </Tabs.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}
