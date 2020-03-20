// import 'react-native-gesture-handler';
import React from "react";
import { View, Platform, StatusBar } from "react-native";
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
import Constants from 'expo-constants';
import { createStackNavigator} from "@react-navigation/stack";
import EntryDetail from "./components/EntryDetail";
import Live from "./components/Live";
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";

const UdaciStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{backgroundColor: backgroundColor, height: Constants.statusBarHeight }} >
      <StatusBar translucent backgroundColor={backgroundColor} {...props }/>
    </View>
  )
};

const navigationOptions = {
  headerShown: false
};

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

const HistoryTabIcon = {
 tabBarIcon: () => (
    <Ionicons name="ios-bookmarks" size={30} color={purple} />
  )
};

const AddEntryIcon = {
  tabBarIcon: () => (
    <FontAwesome name="plus-square" size={30} color={purple} />
  )
};

const LiveTabIcon = {
  tabBarIcon: () => (
    <Ionicons name="ios-speedometer" size={30} color={purple} />
  )
};


const Tabs =
  Platform.OS === "ios"
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator();

const Home = () => {
  return(
    <Tabs.Navigator
      initialRouteName="Add Entry"
      navigationOptions={ navigationOptions }
      tabBarOptions={ tabBarOptions }
    >
      <Tabs.Screen name="History" component={History} options={ HistoryTabIcon }/>
      <Tabs.Screen name="Add Entry" component={AddEntry} options={ AddEntryIcon }/>
      <Tabs.Screen name="Live" component={Live} options={ LiveTabIcon }/>
    </Tabs.Navigator>
  )
} ;

const MainStack = createStackNavigator();

const EntryDetailOptions = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: purple,
  },
};

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={ purple } barStyle='light-content'/>
          <NavigationContainer>
            <MainStack.Navigator>
              <MainStack.Screen name='Home' component={Home}/>
              <MainStack.Screen
                name='Entry Detail'
                component={ EntryDetail }
                options={ EntryDetailOptions }
              />
            </MainStack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}
