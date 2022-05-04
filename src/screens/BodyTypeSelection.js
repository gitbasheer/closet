import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../constants/cnst";
import Button from "../components/button";

const BodyTypeSelection = () => {
  return (
    <View style={styles.container}>
      <Button
        title="go back"
        onPress={() => {
          this.props.navigation.goBack();
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>My Body Type Is...</Text>
      </View>
      <View style={styles.buttons}>
        <Button>Ectomorph</Button>
      </View>
      <View style={styles.buttons}>
        <Button>Ectomorph</Button>
      </View>
      <View style={styles.buttons}>
        <Button>Ectomorph</Button>
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

export default BodyTypeSelection;
