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

export default function LoginPage({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleCancel = () => {
    // Logica pentru autentificare
    console.log("Autentificare cu:", username, password);
    navigation.navigate("Home");
  };

  const handleSignUp = () => {
    // Navigare către pagina de înregistrare
    console.log("Navigare către pagina de înregistrare");
    navigation.navigate("mainPageUser");
  };

  const handleLoginOrganizer = () => {
    // Navigare către pagina de înregistrare
    console.log("Navigare către pagina de înregistrare");
    navigation.navigate("organizerUserPage");
  };
  
  const handleLoginAdmin = () => {
    // Navigare către pagina de înregistrare
    console.log("Navigare către pagina de înregistrare");
    navigation.navigate("adminPage");
  };

  async function loadFonts() {
    await Font.loadAsync({
      "press-start-2p": require("..\\assets\\fonts\\PressStart2P-Regular.ttf"),
    });
  }

  loadFonts();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("..\\assets\\login.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Log In</Text>
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
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={handleCancel}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogin} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonLoginOrganizer} onPress={handleLoginOrganizer}>
              <Text style={styles.buttonText}>Login Organizer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogin} onPress={handleLoginAdmin}>
              <Text style={styles.buttonText}>Login Admin</Text>
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
  title: {
    alignSelf: "center",
    fontFamily: "press-start-2p",
    color: "white",
    fontSize: 40,
  },
  username: {
    alignSelf: "flex-start",
    fontFamily: "press-start-2p",
    color: "black",
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    padding: 20,
    borderRadius: 8,
    minWidth: 300,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#DA6485",
  },
  buttonCancel: {
    backgroundColor: "#68021F",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 5,
    alignSelf: "center",
  },
  buttonLogin: {
    backgroundColor: "#68021F",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 5,
    alignSelf: "center",
  },
  buttonLoginOrganizer: {
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

//mongodb+srv://<username>:<password>@nearbynights.yzzb8xb.mongodb.net/
