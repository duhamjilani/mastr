import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

export default function PrivacyPolicy(props) {
    const bulletCharacter = "\u2022"; // Unicode character for bullet point

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="arrowleft" size={40} color={"#375987"} onPress={()=>{ props.navigation.push('NAVBAR/Settings')}}/>
                <Text style={styles.headerText}>Privacy Policy</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.listItem}>
                    {bulletCharacter} We collect personal and location data for employee tracking.
                </Text>
                <Text style={styles.listItem}>
                    {bulletCharacter} We use data for employee tracking, communication, and system improvement.
                </Text>
                <Text style={styles.listItem}>
                    {bulletCharacter}Your data may be shared with authorized personnel, service providers, or for legal compliance.

                </Text>
                <Text style={styles.listItem}>
                    {bulletCharacter} We employ industry-standard security measures to protect your data.
                </Text>
                <Text style={styles.listItem}>
                    {bulletCharacter}You have the right to access, correct, and request deletion of your data.
                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    headerText: {
        color: "#09648C",
        fontSize: 24,
        fontWeight: "bold",
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
      
        width: "65%",
        marginRight: 100,
    },
    contentContainer: {
        width: "80%",
        height: "75%",
        backgroundColor: "#09648C",
        opacity: 0.6,
        marginTop: 60,
        alignItems: 'flex-start',
        padding: 20,
        borderRadius:10,
        marginBottom:20
    },
    listItem: {
        fontSize:20,
        marginBottom:20,
        color:"white"
    },
});