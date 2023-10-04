import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

function NavBar(props) {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("NAVBAR/Profile")}>
        <View>
          <Icon name="user" size={30} color={"white"} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("NAVBAR/Home")}>
        <View>
          <Icon name="home" size={30} color={"white"} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("NAVBAR/Settings")}>
        <View>
          <Icon name="setting" size={30} color={"white"} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#09648C",
    height: 60,
    width: "100%",
    borderRadius: 20,
    opacity: 0.7,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
  },
});

export default NavBar;
