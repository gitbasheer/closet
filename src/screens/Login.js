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
// import { StyledLabel } from "../components/styles";
import { basic } from "../components/styles";
import { Formik } from "formik";

//API
import axios from "axios";
import { useAuth } from "../hooks/userContext";

const Login = ({ navigation }) => {
  // const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { setisloggedin } = useAuth();
  const handleLogin = (credentials) => {
    const url = "https://glacial-escarpment-82030.herokuapp.com/user/signin";
    axios
      .post(url, { email, password })
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;
        console.log(message);
        if (status !== "SUCCESS") {
          handleMessage(message, status);
        } else {
          setisloggedin(true);
          // navigation.navigate("welcome", { ...data[0] });
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
      <View style={styles.inputWrapper}>
        <Text style={basic.labels}>Email or Phone</Text>
        <Input onChange={setemail} />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.labels}>Password</Text>
        <Input onChange={setpassword} />
      </View>
      <View style={styles.inputWrapper}>
        <Button onPress={handleLogin}>Login</Button>
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
