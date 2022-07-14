import React from "react";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import WithDetailScreen from "./screens/WithDetailScreen";
import WriteWithScreen from "./screens/WriteWithScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddCircle from "./assets/add-circle.png";
import AddCircleFilled from "./assets/add-circle-filled.png";
import Chat from "./assets/chat.png";
import ChatFilled from "./assets/chat-filled.png";
import Home from "./assets/home.png";
import HomeFilled from "./assets/home-filled.png";
import Person from "./assets/person.png";
import PersonFilled from "./assets/person-filled.png";
import Setting from "./assets/setting.png";
import SettingFilled from "./assets/setting-filled.png";
import { Image } from "react-native";
import ChatScreen from "./screens/ChatScreen";
import MyScreen from "./screens/MyScreen";
import SettingScreen from "./screens/SettingScreen";


const Tab = createBottomTabNavigator();

const TabNavi = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => focused ? (
            <Image source={HomeFilled} />
          ) : (
            <Image source={Home} />
          ),
        }}

      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => focused ? (
            <Image source={ChatFilled} />
          ) : (
            <Image source={Chat} />
          ),
        }}
      />
      <Tab.Screen
        name="Write"
        component={WriteWithScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => focused ? (
            <Image source={AddCircleFilled} />
          ) : (
            <Image source={AddCircle} />
          ),
        }}
        listeners={() => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate("Write");
          }
        })}
      />
      <Tab.Screen
        name="Person"
        component={MyScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => focused ? (
            <Image source={PersonFilled} />
          ) : (
            <Image source={Person} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => focused ? (
            <Image source={SettingFilled} />
          ) : (
            <Image source={Setting} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="TabNavi" component={TabNavi} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Write" component={WriteWithScreen} />
        <Stack.Screen name="WithDetail" component={WithDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
