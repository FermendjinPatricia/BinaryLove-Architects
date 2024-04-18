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
    console.log("Autentificare cu:", username, password);
  };

  const handleAddParty = () => {
    // Navigare către pagina de add party
    console.log("Navigare către pagina de înregistrare");
  };

  const handleYourParties = () => {
    // Navigare către pagina your parties
    console.log("Navigare către pagina de înregistrare");
  };

  const handleSeeYourRates = () => {
    // Navigare către pagina your parties
    console.log("Navigare către pagina de înregistrare");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("..\\assets\\organizerPageImage.jpg")}
        style={styles.backgroundImage}
      >
        <Text style={styles.title}>Organizer User Page</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonAddParty} onPress={handleAddParty}>
            <Text style={styles.buttonText}>Add Party</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonYourParties} onPress={handleYourParties}>
            <Text style={styles.buttonText}>Your Parties</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSeeYourRates} onPress={handleSeeYourRates}>
            <Text style={styles.buttonText}>See your Rates</Text>
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
    backgroundColor: "#DA5A17",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 5,
  },
  checkboxInput: {
    color: "white",
  },
  buttonContainer: {
    justifyContent: "center",
    marginBottom: 10,
    padding: 50,
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    padding: 20,
    borderRadius: 8,
    minWidth: 300,
  },
  username: {
    alignSelf: "flex-start",
    fontFamily: "press-start-2p",
    color: "white",
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
  buttonAddParty: {
    backgroundColor: "#B6470C",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 5,
    alignSelf: "center",
  },
  buttonYourParties: {
    backgroundColor: "#B6470C",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 5,
    alignSelf: "center",
  },
  buttonSeeYourRates: {
    backgroundColor: "#B6470C",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 5,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "press-start-2p",
  },
});
