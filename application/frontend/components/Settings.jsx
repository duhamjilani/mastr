import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Moon from "react-native-vector-icons/Feather";
import Privacy from "react-native-vector-icons/MaterialIcons";

function Settings(props) {
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
        <Text style={styles.profileText}>Settings</Text>
      </View>
      <View style={styles.boxesContainer}>
        <TouchableOpacity style={styles.boxes}>
          <View style={styles.iconTextContainer}>
            <Icon name="earth" size={30} color={"white"} />
            <Text style={styles.boxText}>Language</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boxes}>
          <View style={styles.iconTextContainer}>
            <Moon name="moon" size={30} color={"white"} />
            <Text style={styles.boxText}>Dark Mode</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boxes}onPress={()=>{ props.navigation.push('NAVBAR/Settings/PrivacyPolicy')}}>
          <View style={styles.iconTextContainer}>
            <Privacy name="privacy-tip" size={30} color={"white"} />
            <Text style={styles.boxText}>Privacy Policy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.help}
          onPress={() => {
            props.navigation.push("NAVBAR/Settings/Help");
          }}
        >
          <Text style={styles.profileText}>Ask for Help</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Settings;

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
  boxesContainer: {
    alignItems: "center",
    justifyContent: "center", // Center the boxes horizontally
    marginTop: 100,
  },
  boxes: {
    height: 80,
    width: 400,
    backgroundColor: "#09648C",
    opacity: 0.6,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 20,
  },
  help: {
    marginTop: 10,
  },
});
