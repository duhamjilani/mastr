import React, { useState, useContext } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import axios from "axios";
import { UserContext } from "./context/User";

function Request(props) {
  const [selectedRequest, setSelectedRequest] = useState(""); // State to store the selected request
  const { userData } = useContext(UserContext);

  const handleRequestSelection = (request) => {
    setSelectedRequest(request);
  };

  const handleReports = async (type) => {
    console.log("type", type);
    const batata = {
      reportType: type,
      reportDate: Date.now(),
    };
    try {
      const res = await axios.post(
        `http://10.7.0.227:4003/employees/${userData._id}/reports`,
        batata
      );
      console.log(res.data);
    } catch (error) {
      alert("hi");
      console.log(error);
    }
  };

  const requestOptions = ["Day off", "Leave", "Bonus"]; // List of available requests

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
        <Text style={styles.profileText}>Request</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.centeredText}>Choose your request</Text>
        <View style={styles.requestList}>
          {requestOptions.map((request, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.requestItem,
                selectedRequest === request && styles.selectedItem,
              ]}
              onPress={() => handleRequestSelection(request)}
            >
              <Text style={styles.requestText}>{request}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            if (selectedRequest) {
              handleReports(selectedRequest);
              alert(`Selected Request: ${selectedRequest}`);
            } else {
              alert("Please select a request.");
            }
          }}
          disabled={!selectedRequest}
        >
          <Text style={styles.submitButtonText}>Submit Request</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Request;

const styles = StyleSheet.create({
  bigContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 16, // Add horizontal padding
  },
  arrowContainer: {
    marginRight: 16,
    position: "absolute",
    right: 195, // Adjust margin to create space
  },
  profileText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#375987",
    opacity: 0.9,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredText: {
    color: "gray",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20, // Add margin for spacing
    fontSize: 25,
  },
  requestList: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    gap: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: 80,
  },
  requestItem: {
    backgroundColor: "#EAEAEA",
    paddingVertical: 25,
    paddingHorizontal: 50,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  selectedItem: {
    backgroundColor: "#375987",
    opacity: 0.8,
  },
  requestText: {
    color: "black", // Change text color for readability
  },
  submitButton: {
    backgroundColor: "#375987",
    borderRadius: 10,
    paddingHorizontal: 60,
    padding: 20,
    margin: 20,
    opacity: 0.8,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
