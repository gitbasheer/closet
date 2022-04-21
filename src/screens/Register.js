import React, { useState } from "react";
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

import axios from "axios";

const Register = ({ navigation }) => {
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleRegister = (credentials) => {
    const url = "https://glacial-escarpment-82030.herokuapp.com/user/signup";
    axios
      .post(url, { name, email, password })
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;
        console.log(message);
        if (status !== "SUCCESS") {
          handleMessage(message, status);
        } else {
          navigation.navigate("welcome", { ...data[0] });
        }
      })
      .catch((error) => {
        console.log(error.JSON());
        handleMessage("An error occured. Check your network");
      });
  };

  const handleMessage = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(type);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode={"contain"}
        style={{ width: screenWidth - 60, height: 100 }}
        source={require("../assets/hanger.png")}
      />
      <View style={styles.inputsWrapper}>
        <View style={styles.inputWrapper}>
          <Input placeholder={"Username"} onChange={setName} />
          {/* <Input onChange={setName} /> */}
        </View>
        <View style={styles.inputWrapper}>
          <Input placeholder={"E-mail"} onChange={setemail} />
          {/* <Input onChange={setemail} /> */}
        </View>
        <View style={styles.inputWrapper}>
          <Input placeholder={"Password"} onChange={setpassword} />
          {/* <Input onChange={setpassword} /> */}
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button onPress={handleRegister}>Sign up </Button>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.signuptext}>Already have an account ? Sign in</Text>
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

  inputWrapper: {},
  inputsWrapper: {
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 20,
  },
  buttonWrapper: {
    marginVertical: 20,
  },
  signuptext: {
    color: colors.white,
  },
});

export default Register;
