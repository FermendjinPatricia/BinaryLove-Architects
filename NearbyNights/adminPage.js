import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function mainPageUser({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogOut = () => {
    // Logica pentru autentificare
    navigation.navigate("LoginPage");
    console.log("Log in with:", username, password);
  };

  const handleSeeReports = () => {
    // Navigare către pagina See Reports
    console.log("Go to register page");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("..\\assets\\organizerPageImage.jpg")}
        style={styles.backgroundImage}
      >
        <Text style={styles.title}>Administrator</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonSeeReports} onPress={handleSeeReports}>
            <Text style={styles.buttonText}>See Reports</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogOut} onPress={handleLogOut}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainerButton: {
    flex: 1,
    justifyContent: "left",
    alignItems: "left",
    padding: 50,
  },
  buttonLogOut: {
    backgroundColor: "#DA2A17",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 5,
  },
  checkboxInput: {
    color: "black",
  },
  buttonContainer: {
    justifyContent: "center",
    marginBottom: 10,
    padding: 50,
  },
  formContainer: {
    backgroundColor: "rgba(200, 200, 255, 0)",
    padding: 20,
    borderRadius: 8,
    minWidth: 300,
  },
  username: {
    alignSelf: "flex-start",
    fontFamily: "press-start-2p",
    color: "black",
    fontSize: 15,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    alignSelf: "center",
    fontFamily: "press-start-2p",
    color: "#FCB38D",
    fontSize: 40,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#DA6485",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
  buttonSeeReports: {
    backgroundColor: "#B6470C",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 5,
    alignSelf: "center",
  },
  buttonText: {
    color: "black",
    fontFamily: "press-start-2p",
  },
});
