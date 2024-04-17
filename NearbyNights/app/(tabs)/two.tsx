//

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";
import { CheckBox } from "react-native-elements";

const RegisterPage = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [isOrganizer, setIsOrganizer] = useState(false);

  const handleRegister = () => {
    if (isOrganizer) {
      // Navigare către pagina de organizator
      console.log("Navigare către pagina de organizator");
    } else {
      // Navigare către homepage
      console.log("Navigare către homepage");
    }
  };

  // create the handleCancel function
  const handleCancel = () => {
    // Navigare către pagina de login
    console.log("Navigare către pagina de login");
  };

  const [password, setPassword] = useState(""); // Add this line to define the 'setPassword' function

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("..\\assets\\images\\login.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Register a new account</Text>
          <Text style={styles.username}>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <Text style={styles.username}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          <Text style={styles.username}>Retype Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          <View style={styles.checkboxContainer}>
            <CheckBox
              checked={isOrganizer}
              onPress={() => setIsOrganizer((previousState) => !previousState)}
            />
            <Text style={styles.checkboxLabel}>
              <Text style={styles.checkboxInput}>
                I want to be an organizer
              </Text>
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonCancel} onPress={handleCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
            <Pressable style={styles.buttonRegister} onPress={handleRegister}>
              <Text style={styles.buttonText}>Register</Text>
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
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
    color: "white",
    fontSize: 30,
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
    backgroundColor: "#68021F",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 5,
    alignSelf: "center",
  },
  buttonRegister: {
    backgroundColor: "#68021F",
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
