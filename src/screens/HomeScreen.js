import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Main Menu</Text>

      <Button
        onPress={() => navigation.navigate("Search")}
        title="Search Screen"
      />
      <Button
        onPress={() => navigation.navigate("Categories")}
        title="Seller Screen"
      />
      <Button
        onPress={() => navigation.navigate("Login")}
        title="Login Screen"
      />
      <Button
        onPress={() => navigation.navigate("Register")}
        title="Resgister Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
    alignSelf: "center",
  },
});

export default HomeScreen;
