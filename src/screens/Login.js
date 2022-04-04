import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, screenWidth } from "../constants/cnst";
import Button from "../components/button";
import Input from "../components/input";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode={"contain"}
        style={{ width: screenWidth - 60, height: 100 }}
        source={require("../assets/hanger.png")}
      />
      <View style={styles.inputWrapper}>
        <Text style={styles.labels}>Email or Phone</Text>
        <Input />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.labels}>Password</Text>
        <Input />
      </View>
      <View style={styles.inputWrapper}>
        <Button>Login</Button>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text style={styles.signuptext}>REGISTER NOW</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  labels: {
    color: colors.white,
    fontSize: 15,
    marginVertical: 5,
  },
  inputWrapper: {
    marginVertical: 13,
  },
  signuptext: {
    color: colors.white,
  },
});

export default Login;
