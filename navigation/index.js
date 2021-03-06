import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Forgot from "../screens/Forgot";
import Explore from "../screens/Explore";
import Browse from "../screens/Browse";
// import Product from "../screens/Product";
import Settings from "../screens/Settings";
import CompletedOrders from "../screens/CompletedOrders"

import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    SignUp,
    Forgot,
    Explore,
    Browse,
    // Product,
    Settings,
    CompletedOrders,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 5,
        backgroundColor: "cadetblue", // or white
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },
      headerBackImage: <Image source={require("../assets/icons/back.png")} />,
      headerBackTitle: " ",
      headerTitleStyle: {
        color: "transparent",
        headerTintColor: "white"
      },
      headerLeftContainerStyle: {
        backgroundColor: "transparent",
        alignItems: "center",
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        backgroundColor: "transparent",
        alignItems: "center",
        paddingRight: theme.sizes.base
      }
    }
  }
);

export default createAppContainer(screens);