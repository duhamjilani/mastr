import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView, // Import ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
const image = require("frontend/assets/Ellipse1.jpg");
import { UserContext } from "./context/User";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
function Profile(props) {
  const navigation = useNavigation();
  const { logOut, userData } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(!!AsyncStorage.getItem("login"));
  const handleLogout = () => {
    AsyncStorage.removeItem("login"); 
    setIsLoggedIn(false);
    navigation.navigate("LogIn")
    logOut();
   ;
  };
  return (
    <ScrollView contentContainerStyle={styles.bigContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={() => {
            props.navigation.push("Home");
          }}
        >
          <Icon name="arrowleft" size={40} color={"#375987"} />
        </TouchableOpacity>
        <Text style={styles.profileText}>My Profile</Text>
      </View>
      <Image source={image} style={styles.userImage} />
      <View style={styles.boxes}>
        <Text>id: {userData._id}</Text>
      </View>
      <View style={styles.boxes}>
        <Text>name: {userData.name}</Text>
      </View>
      <View style={styles.boxes}>
        <Text>password: {userData.password}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  bigContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowContainer: {
    position: "absolute",
    right: 195,
  },
  profileText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#375987",
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 20,
  },

  boxes: {
    height: 80,
    width: 400,
    opacity: 0.6,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  button: {
    backgroundColor: "#09648C",
    height: 60,
    width: "90%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
