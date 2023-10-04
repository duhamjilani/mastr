import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Mail from "react-native-vector-icons/Entypo";
function Help(props) {
  return (
    <ScrollView contentContainerStyle={styles.bigContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.arrowContainer}onPress={()=>{ props.navigation.push('NAVBAR/Settings')}}>
          <Icon name="arrowleft" size={40} color={"#375987"} />
        </TouchableOpacity>
        <Text style={styles.profileText}>Ask For Help</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.box}>
          <Mail name="email" size={30} color={"white"} />
          <Text style={styles.box_text}>Admin@gmail.com</Text>
        </View>
    
        <View style={styles.box}>
          <Mail name="phone" size={30} color={"white"} />
          <Text style={styles.box_text}>0799856476</Text>
        </View>
     </View>
    </ScrollView>
  );
}

export default Help;
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
  contentContainer: {
    width: "80%",
    height: "50%",
    backgroundColor: "#09648C",
    opacity: 0.6,
    marginTop: 60,
    alignItems: "center",
    justifyContent:"space-evenly",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  box:{
    flexDirection:"row",
    alignItems:"center",
    gap:10,
    marginTop:20
  },
  box_text:{
color:"white",
fontWeight:"bold",
fontSize:20
  },
});
