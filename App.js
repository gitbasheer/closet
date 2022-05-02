import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import { LogBox, Text } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import MensWear from "./src/screens/MensWear";
import WomensWear from "./src/screens/WomensWear";
import BodyTypeSelection from "./src/screens/BodyTypeSelection";
import AccountType from "./src/screens/AccountType";
import TwoFactorAuthentication from "./src/screens/TwoFactorAuthentication";
import GenderSelection from "./src/screens/GenderSelection";
import MensShirts from "./src/screens/MensShirts";
import WomensShirts from "./src/screens/WomensShirts";
import React, { useState, useEffect } from "react";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const buyerStack = createStackNavigator(
  {
    MensWear: MensWear,
    WomensWear: WomensWear,
  },
  {
    initialRouteName: "AuthCheck",
  }
);
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    Categories: CategoriesScreen,

    BodyTypeSelection: BodyTypeSelection,
    GenderSelection: GenderSelection,
    AccountType: AccountType,
    TwoFactorAuthentication: TwoFactorAuthentication,
    MensShirts: MensShirts,
    WomensShirts: WomensShirts,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Closet",
    },
  }
);
const AuthNavigation = createStackNavigator({
  Login: Login,
  Register: Register,
});

const CheckAuth = (props) => {
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    let user = {
      type: "shopper",
    };
    console.log("working");
    if (user) {
      props.navigation.navigate("AuthStack");
    } else if (user.type == "shopper") {
      props.navigation.navigate("UserStack");
    } else {
      props.navigation.navigate("Buyer");
    }
  }, []);

  return <Text>loading....</Text>;
};
const MainNavigation = createSwitchNavigator(
  {
    // AuthCheck: CheckAuth,
    // AuthStack: AuthNavigation,
    UserStack: navigator,
    BuyserStack: buyerStack,
  },
  {
    initialRouteName: "UserStack",
  }
);
export default createAppContainer(MainNavigation);

// import Root from "./src/navigators/root";
// export default function App() {
//   return <Root />;
// }
