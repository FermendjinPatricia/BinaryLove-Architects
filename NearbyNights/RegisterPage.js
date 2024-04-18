import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, CheckBox } from 'react-native';

export default function RegisterPage({ navigation }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isOrganizer, setIsOrganizer] = useState(false);


    const handleRegister = () => {
      const userData = {
        username: username,
        password: password,
        isOrganizer: isOrganizer
      };
    
      fetch('http://localhost:8081', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        navigation.navigate('mainPageUser');
        // Aici poți face orice altă acțiune, cum ar fi redirecționarea către altă pagină sau afișarea unui mesaj de succes
      })
      .catch(error => {
        console.error('Error:', error);
        // Aici poți afișa un mesaj de eroare pentru utilizator
      });
    };
    

  const handleCancel = () => {
    // Navigare către pagina de login
    navigation.navigate('Home');
    console.log("Navigare către pagina de login");
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}> 
      <ImageBackground source={require('..\\assets\\login.jpg')} style={styles.backgroundImage}>
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
        />

        <Text style={styles.username}>Retype Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
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
          <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
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