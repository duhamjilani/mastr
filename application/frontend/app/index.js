import React, { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Layout from "../components/layout/layout";
import LogIn from "../components/Login";
import Home from "../components/home/Home";
import NavBar from "../components/NavBar";
import Salary from "../components/Salary";
import Info from "../components/Info";
import Request from "../components/Request";
import Profile from "../components/Profile";
import Settings from "../components/Settings";
import Help from "../components/Help";
import PrivacyPolicy from "../components/PrivacyPolicy";
import { UserContextProvider} from "../components/context/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Page() {
  const Stack = createNativeStackNavigator();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };


  return (
    <UserContextProvider>
      <NavigationContainer independent={true} theme={MyTheme}>
        <Layout>
          <SafeAreaView style={styles.container}>
            <Stack.Navigator
              initialRouteName="LogIn"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="LogIn" component={LogIn} />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerTitle: "" }}
              />
              <Stack.Screen
                name="Home/Salary"
                component={Salary}
                options={{ headerTitle: "" }}
              />
              <Stack.Screen
                name="Home/Info"
                component={Info}
                options={{ headerTitle: "" }}
              />
              <Stack.Screen
                name="Home/Request"
                component={Request}
                options={{ headerTitle: "" }}
              />
              <Stack.Screen
                name="NAVBAR/Home"
                component={Home}
                options={{ headerTitle: "" }}
              />
              <Stack.Screen
                name="NAVBAR/Profile"
                component={Profile}
                options={{ headerTitle: "" }}
              />
              <Stack.Screen
                name="NAVBAR/Settings"
                component={Settings}
                options={{ headerTitle: "" }}
              />
              <Stack.Screen
                name="NAVBAR/Settings/Help"
                component={Help}
                options={{ headerTitle: "" }}
              />
              <Stack.Screen
                name="NAVBAR/Settings/PrivacyPolicy"
                component={PrivacyPolicy}
                options={{ headerTitle: "" }}
              />
              {/* Add other Stack.Screen elements for your other components */}
            </Stack.Navigator>
          </SafeAreaView>
      
        </Layout>
      </NavigationContainer>
    </UserContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
  },
});
