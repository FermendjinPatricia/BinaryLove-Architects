//

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";
import { CheckBox } from "react-native-elements";

const RegisterPage = ({ navigation }: { navigation: any }) => {
  // create the handleCancel function
  const handleCancel = () => {
    // Navigare către pagina de login
    console.log("Navigare către pagina de login");
  };

  const [password, setPassword] = useState(""); // Add this line to define the 'setPassword' function

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("..\\assets\\images\\userPageImage.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Main User Page</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonCancel}>
              <Text style={styles.buttonText}>Search Parties</Text>
            </Pressable>
            <Pressable style={styles.buttonRegister}>
              <Text style={styles.buttonText}>Your Parties</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    color: "black",
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
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonCancel: {
    backgroundColor: "#D21312",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 5,
    alignSelf: "center",
  },
  buttonRegister: {
    backgroundColor: "#D21312",
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

export default RegisterPage;
