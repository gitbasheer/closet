import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import { LogBox } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Mens_Wear from "./src/screens/Mens_Wear";
import Womens_Wear from "./src/screens/Womens_Wear"

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    Categories: CategoriesScreen,
    Login: Login,
    Register: Register,
    Mens_Wear: Mens_Wear,
    Womens_Wear: Womens_Wear,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Closet",
    },
  }
);

export default createAppContainer(navigator);
