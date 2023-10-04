import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { UserContext } from "./context/User";
import {useContext} from "react";

export default function Salary(props) {
  const {userData}=useContext(UserContext)
  console.log(userData)
  return (
    <View style={styles.bigContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.arrowContainer}onPress={()=>{ props.navigation.push('Home')}}>
          <Icon name="arrowleft" size={40} color={"#375987"} />
        </TouchableOpacity>
        <Text style={styles.profileText}>Salary</Text>
      </View>

      <View style={styles.totalSalary}>
        <Text style={styles.title}>Total</Text>
        <Text style={[styles.salary, { color: "blue" }]}>{userData.salary}JD</Text>
      </View>
      <View style={styles.bonusDeduct}>
        <Text style={styles.Title}>Bonus</Text>
        <Text style={[styles.salary, { color: "green" }]}>50JD</Text>
      </View>
      <View style={styles.bonusDeduct}>
        <Text style={[styles.Title]}>Deduct</Text>
        <Text style={[styles.salary, { color: "red" }]}>10JD</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bigContainer: {
    flexGrow: 1,
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
  container: {
    alignItems: "center",
    marginTop: 10,
  },

  totalSalary: {
    width: "90%",
    height: "30%",
    backgroundColor: "rgba(9, 100, 140, 0.3)",
    borderRadius: 20,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  bonusDeduct: {
    width: "90%",
    height: "15%",
    backgroundColor: "rgba(9, 100, 140, 0.3)",
    borderRadius: 20,
    marginTop: 50,
    flexDirection: "row",
    gap: 130,
    alignItems: "center",
  },
  Title: {
    color: "#09648C",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
  },
  title: {
    color: "#09648C",
    fontSize: 24,
    fontWeight: "bold",
  },
  salary: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
