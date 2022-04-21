import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, screenWidth } from "../constants/cnst";

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}> {children} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "#015850",
    width: screenWidth - 30,
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Button;
