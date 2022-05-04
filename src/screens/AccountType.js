import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../constants/cnst";
import Button from "../components/button";
import { useAuth } from "../hooks/userContext";

const AccountType = ({ navigation }) => {
  const { setuserType } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>I am a...</Text>
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={() => {
            setuserType("buyer");
            navigation.navigate("Login");
          }}
        >
          Buyer
        </Button>
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={() => {
            setuserType("seller");

            navigation.navigate("Login");
          }}
        >
          Seller
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: colors.green,
  },
  buttons: {
    marginVertical: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.white,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    marginVertical: 10,
    fontSize: 24,
    color: colors.white,
    // alignContent:"center",
    // justifyContent: "center",
    // alignSelf:"center"
  },
  textContainer: {
    marginVertical: 15,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default AccountType;
