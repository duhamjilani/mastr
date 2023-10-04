import { React, useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { UserContext } from "./context/User";
const logo = require("frontend/assets/masterpiecelogo.png"); // Adjust the image path as needed
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
function LogIn(props) {
  const [dataLogin, setdataLogin] = useState({ name: "", password: "" });
  console.log(dataLogin);
  const { logIn } = useContext(UserContext);
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://10.7.0.227:4003/employee/login",
        dataLogin
      );
      console.log(res.data);
      const token = res.data.token;
      console.log(token);
      AsyncStorage.setItem("login", token);
      console.log("res.data.currentUser", res.data.currentUser);
      logIn(res.data.currentUser);
      props.navigation.push("Home");
    } catch (error) {
      alert("invalid user name or password");
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logoStyle} />
      <Text style={styles.text}>Log In to continue</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name "
        placeholderTextColor="#888"
        onChangeText={(text) => {
          setdataLogin({ ...dataLogin, name: text });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry // Hide the input for passwords
        onChangeText={(text) => {
          setdataLogin({ ...dataLogin, password: text });
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.infoText}>
        *Connect with Admin To Get ID & Password
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoStyle: {
    height: 200,
    width: 200,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 10,
    alignItems: "center",

    // Adjust the top padding to your preference
  },
  text: {
    color: "#09648C",
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#09648C",
    height: 50,
    width: "80%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  infoText: {
    color: "#888",
    fontSize: 12,
    marginTop: 20,
  },
});

export default LogIn;
