import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Input from "../components/input";
import Button from "../components/button";
import { colors } from "../constants/cnst";

const TwoFactorAuthentication = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Please Enter Your PIN:</Text>
      </View>
      <View style={styles.inputs}>
        <View style={styles.input}>
          <Input placeholder={""} maxLength={1} />
        </View>
        <View style={styles.input}>
          <Input placeholder={""} maxLength={1} />
        </View>
        <View style={styles.input}>
          <Input placeholder={""} maxLength={1} />
        </View>
        <View style={styles.input}>
          <Input placeholder={""} maxLength={1} />
        </View>
      </View>
      <View style={styles.button}>
        <Button>Continue</Button>
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

  inputs: {
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
    alignContent: "center",
    justifyContent: "center",
  },

  input: {
    width: "5%",
    overflow: "hidden",
    marginHorizontal: 10,
  },

  button: {
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.white,
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

export default TwoFactorAuthentication;
