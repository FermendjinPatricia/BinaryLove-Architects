import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, CheckBox } from 'react-native';

export default function RegisterPage({ navigation }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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

  const handleCancel = () => {
    // Navigare către pagina de login
    console.log("Navigare către pagina de login");
  };

  return (
    <View style={styles.container}> 
      <ImageBackground source={require('..\\assets\\login.jpg')} style={styles.backgroundImage}>
        <Text style={styles.title}>NearbyNights</Text>
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
        />

        <Text style={styles.username}>Retype Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <View style={styles.checkboxContainer}>
            <CheckBox
                value={isOrganizer}
                onValueChange={setIsOrganizer}
            />
            <Text style={styles.checkboxLabel}>
                I want to be an organizer
            </Text>
        </View>


        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
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
      alignSelf: "center",
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
      color: 'white'
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