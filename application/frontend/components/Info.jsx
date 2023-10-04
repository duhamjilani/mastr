import React from 'react'
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
import Time from "react-native-vector-icons/MaterialIcons";

function Info(props) {
  return (
    <ScrollView contentContainerStyle={styles.bigContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.arrowContainer}onPress={()=>{ props.navigation.push('Home')}}>
          <Icon name="arrowleft" size={40} color={"#375987"} />
        </TouchableOpacity>
        <Text style={styles.profileText}>Report</Text>
      </View>
      <View style={styles.box}>
        <Time name='access-time' color={"red"} size={40} />
        <Text style={styles.boxText}>Tardy</Text>
      </View>
      {/* Add more boxes with different content and icons */}
      <View style={styles.box}>
        <Icon name="user" size={40} color={"red"} />
        <Text style={styles.boxText}>Absent</Text>
      </View>
      <View style={styles.box}>
        <Time name="time-to-leave" size={40} color={"red"} />
        <Text style={styles.boxText}>Early Leave</Text>
      </View>
    </ScrollView>
  )
}

export default Info

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
  box: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 100, // Adjust the height as needed
    width: "80%", // Adjust the width as needed
    backgroundColor: "white", // Change background color here
    marginVertical: 20, // Add vertical margin as needed
    borderRadius: 10,
    marginTop: 50, // Adjust top margin between boxes
    borderColor: "#375987",
    borderWidth: 1,
    elevation: 2, // Add elevation for a card-like appearance
  },
  boxText: {
    color: "#375987",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 10,
  },
})
