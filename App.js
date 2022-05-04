import React, { useState, useEffect } from "react";

import SearchScreen from "./src/screens/SearchScreen";
import { LogBox, SafeAreaView, Text } from "react-native";
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, useAuth } from "./src/hooks/userContext";


LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);



const Stack = createNativeStackNavigator();

function MainNavigation() {

  const { isloggedin, userType } = useAuth()
  useEffect(() => {

  }, [])

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>

        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          {
            !isloggedin ?
              <>
                <Stack.Screen name="AccountType" component={AccountType} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />

              </> :
              userType == 'buyer' ?
                <>
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="MensWear" component={MensWear} />
                  <Stack.Screen name="WomensWear" component={WomensWear} />
                  <Stack.Screen name="Search" component={SearchScreen} />
                  <Stack.Screen name="BodyTypeSelection" component={BodyTypeSelection} />
                  <Stack.Screen name="GenderSelection" component={GenderSelection} />
                  <Stack.Screen name="TwoFactorAuthentication" component={TwoFactorAuthentication} />
                </>
                :
                <>
                  <Stack.Screen name="Categories" component={CategoriesScreen} />

                </>
          }

        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}


const App = () => {
  return (
    <AuthProvider>

      <MainNavigation />
    </AuthProvider>

  )
}

export default App;
