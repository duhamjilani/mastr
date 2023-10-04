import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import Icons from "react-native-vector-icons/FontAwesome";
import REPORT from "react-native-vector-icons/AntDesign"; // Import AntDesign for the "Report" icon
import dayjs from "dayjs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { UserContext } from "../context/User";
function Home(props) {
  const { userData } = useContext(UserContext);
  const [currentDate, setCurrentDate] = useState(" ");
  const [checkInEnable, setCheckInEnable] = useState(true);
  const [checkOutEnable, setCheckOutEnable] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState({
    date: dayjs().format("DD-MM-YYYY"),
    time: dayjs().format("hh:mm A"),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime({
        date: dayjs().format("DD-MM-YYYY"),
        time: dayjs().format("hh:mm:ss "),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handelCheckIn = async () => {
    handleCheckInEndpoint();
    setCheckInEnable(false);
    setCheckOutEnable(true);
  };
  const handleCheckInEndpoint = async () => {
    try {
      const res = await axios.post(
        `http://10.7.0.227:4003/employees/${userData._id}/checkIn`
      );
      console.log(res.data);
    } catch (error) {
      alert("hi");
      console.log(error);
    }
  };
  const handleCheckOutEndpoint = async () => {
    try {
      const res = await axios.post(
        `http://10.7.0.227:4003/employees/${userData._id}/checkOut`
      );
      console.log(res.data);
    } catch (error) {
      alert("hi");
      console.log(error);
    }
  };
  const handelCheckOut = async () => {
    handleCheckOutEndpoint();
    setCheckOutEnable(false);
    WorkingHours();
  };
  const WorkingHours = async () => {
    const CheckIn = await AsyncStorage.getItem("CheckInn");
    const CheckOut = await AsyncStorage.getItem("CheckOutt");
    const hoursDifference = CheckOut - CheckIn;
    const hours = Math.round(hoursDifference / 3600000);
    console.log(CheckIn);
    console.log(CheckOut);
    console.log(hoursDifference);
    console.log(hours);
  };

  return (
    <ScrollView contentContainerStyle={styles.bigContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeStyle}>Welcome</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="bell" size={40} color={"#375987"} />
        </TouchableOpacity>
      </View>
      <View style={styles.today}>
        <Text style={styles.today_text}> Today: {currentDateTime.date} </Text>
        <View style={styles.timeBorder}>
          <View style={styles.timeInner}>
            <Text style={styles.time_text}>{currentDateTime.time}</Text>
          </View>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={[
              styles.checkInContainer,
              { backgroundColor: checkInEnable ? "white" : "gray" },
            ]}
            disabled={!checkInEnable}
            onPress={handelCheckIn}
          >
            <Text> Check In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.checkOutContainer,
              { backgroundColor: checkOutEnable ? "white" : "gray" },
            ]}
            disabled={!checkOutEnable}
            onPress={handelCheckOut}
          >
            <Text>Check Out</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Add 3 boxes */}
      <TouchableOpacity
        style={styles.boxes}
        onPress={() => {
          props.navigation.push("Home/Salary");
        }}
      >
        <View style={styles.iconTextContainer}>
          <Icons name="money" size={30} color={"white"} />
          <Text style={styles.boxText}>Salary</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.boxes}
        onPress={() => {
          props.navigation.push("Home/Info");
        }}
      >
        <View style={styles.iconTextContainer}>
          <REPORT name="filetext1" size={30} color={"white"} />
          <Text style={styles.boxText}>Report</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.boxes}
        onPress={() => {
          props.navigation.push("Home/Request");
        }}
      >
        <View style={styles.iconTextContainer}>
          <REPORT name="filetext1" size={30} color={"white"} />
          <Text style={styles.boxText}>Request</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  welcomeStyle: {
    fontSize: 30,
    color: "#375987",
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
  },
  iconContainer: {
    position: "absolute",
    left: 200,
  },
  today: {
    backgroundColor: "#045679",
    height: 400,
    width: 400,
    marginTop: 20,
    borderRadius: 10,
    opacity: 0.5,
    alignItems: "center",
  },
  today_text: {
    color: "white",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
  },
  timeBorder: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 7,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  timeInner: {
    height: 190,
    width: 190,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  time_text: {
    color: "white",
    fontSize: 40,
  },
  btns: {
    flexDirection: "row",
    marginTop: 20,
  },
  checkInContainer: {
    margin: 10,

    height: 40,
    width: "40%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    color: "#375987",
  },
  checkOutContainer: {
    margin: 10,

    height: 40,
    width: "40%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    color: "#375987",
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
    marginLeft: 10,
  },
});
