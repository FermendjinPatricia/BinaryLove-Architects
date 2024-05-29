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

export default function addPartyPage({ navigation }) {
  const handleCancel= () => {
    // Logica pentru autentificare
    navigation.navigate("organizerUserPage");
    console.log("Autentificare cu:", username, password);
  };

  const handleConfirm = () => {
    // Navigare către pagina de add party
    navigation.navigate("organizerUserPage");
    console.log("Navigare către pagina de înregistrare");
  };

  return (
    <View style={styles.container}>
    <ImageBackground
      source={require("..\\assets\\organizerPageImage.jpg")}
      style={styles.backgroundImage}
    >
      <Text style={styles.title}>Add your party</Text>
      <View style={styles.buttonContainerBehind}>
      <View style={styles.buttonContainerParallel}>

        <Text style={styles.buttonText}>Enter your party name</Text>
        <TextInput
          style={styles.input}
        />

        <Text style={styles.buttonText}>Location</Text>
        <TextInput
          style={styles.input}
        />

        <Text style={styles.buttonText}>Dresscode</Text>
        <TextInput
          style={styles.input}
        />

        <Text style={styles.buttonText}>Hour</Text>
        <TextInput
          style={styles.input}
        />

      </View>
      <View style={styles.pictureTextContainer}>
            <Text style={styles.pictureText}>Picture</Text>
            <TextInput style={styles.inputPicture} />
          </View>
      </View>

      <Text style={styles.buttonText}>Short description</Text>
            <TextInput style={styles.input} />

            <TouchableOpacity
              style={styles.buttonCancel} onPress={handleCancel}
            >
              <Text style={styles.buttonText }>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonConfirm} onPress={handleConfirm}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
{/* 
           <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonCancel}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonConfirm} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
          </View>  */} 
          {/* idk de ce e eroare la aceste doua butoane mirifice*/}
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
  pictureTextContainer: {
    flexDirection: "column", // Aranjează elementele vertical
    alignItems: "flex-end",
    width: "50%", // Poți ajusta lățimea după necesități
  },
  buttonLogOut: {
    backgroundColor: "#DA2A17",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 5,
  },
  checkboxInput: {
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  buttonContainerParallel: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  buttonContainerBehind: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
    width: "50%",
  },
  formContainer: {
    backgroundColor: "rgba(255, 200, 255, 0)",
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
    top: 20,
    position: "absolute"
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#DC7A46",
  },
  inputPicture: {
    marginBottom: 5,
    padding: 5,
    borderRadius: 2,
    backgroundColor: "#DC7A46",
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
    color: "#FCB38D",
    fontFamily: "press-start-2p",
  },

  pictureText: {
    textAlign: "right",
    marginRight: 30,
    color: "#FCB38D",
    fontFamily: "press-start-2p",
    width: "100%",
  },
  buttonCancel: {
    backgroundColor: "#68021F",
    padding: 5,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 5,
    alignSelf: "center",
  },
  buttonConfirm: {
    backgroundColor: "#68021F",
    padding: 5,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 5,
    alignSelf: "center",
  },
});
