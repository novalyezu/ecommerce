import React, { Component } from "react";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./src/screen/Home";
import CartScreen from "./src/screen/Cart";
import DetailProductScreen from "./src/screen/DetailProduct";

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: "Home",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    })
  },
  DetailProduct: {
    screen: DetailProductScreen,
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTransparent: "true"
    })
  }
});

const CartStack = createStackNavigator({
  Cart: {
    screen: CartScreen,
    navigationOptions: () => ({
      title: "Cart",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    })
  },
  DetailProduct: {
    screen: DetailProductScreen,
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTransparent: "true"
    })
  }
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: {
        screen: HomeStack,
        navigationOptions: {
          title: "Home"
        }
      },
      Cart: {
        screen: CartStack,
        navigationOptions: {
          title: "Cart"
        }
      }
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === "Home") {
            iconName = `ios-home`;
          } else if (routeName === "Cart") {
            iconName = `md-cart`;
          }

          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        }
      }),
      tabBarOptions: {
        activeTintColor: "#729ee5",
        inactiveTintColor: "gray"
      }
    }
  )
);
