import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors, screenWidth } from "../constants/cnst";

const Input = ({ onChange, placeholder }) => {
  return (
    <View>
      <TextInput
        placeholderTextColor={"#ccc"}
        placeholder={placeholder}
        onChange={onChange}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    fontSize: 17,
    height: 40,
    padding: 10,
    width: screenWidth - 30,
  },
});

export default Input;
