import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import SearchBar from "../components/SearchBar";

const HomeScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  return (
    <View>
      <Text style={styles.text}>Main Menu</Text>
      <View>
        <SearchBar
          term={term}
          onTermChange={(newTerm) => setTerm(newTerm)}
          onTermSubmit={() => console.log("term was submitted")}
        />
        <Text>{term}</Text>
      </View>

      {/* <Button
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
        onPress={() => 
          navigation.navigate("Register") }
          title="Register Screen"
      /> */}
      <Button
        onPress={() => navigation.navigate("MensWear")}
        title="Men's Wear"
      />
      <Button
        onPress={() => navigation.navigate("WomensWear")}
        title="Women's Wear"
      />
      <Button
        onPress={() => navigation.navigate("BodyTypeSelection")}
        title="Body Type Survey"
      />
      {/* <Button
        onPress={() => navigation.navigate("AccountType")}
        title="Account Type Selection"
      /> */}
      <Button
        onPress={() => navigation.navigate("TwoFactorAuthentication")}
        title="Two-Factor Authentication"
      />
      <Button
        onPress={() => navigation.navigate("GenderSelection")}
        title="Gender Selection"
      />
      {/* <Button
          onPress={() => navigation.navigate("MensShirts")}
          title="Men's Shirts"
        />
        <Button
          onPress={() => navigation.navigate("WomensShirts")}
          title="Women's Shirts"
        /> */}
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
