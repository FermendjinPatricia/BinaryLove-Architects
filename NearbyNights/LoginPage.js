import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function LoginPage({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleCancel = () => {
    // Logica pentru autentificare
    console.log('Autentificare cu:', username, password);
    navigation.navigate('Home');
  };

  const handleSignUp = () => {
    // Navigare către pagina de înregistrare
    console.log('Navigare către pagina de înregistrare');
    navigation.navigate('mainPageUser');
  };

  return (
    <View style={styles.container}> 
      <ImageBackground source={require('..\\assets\\login.jpg')} style={styles.backgroundImage}>
        <Text style={styles.title}>NearbyNights</Text>
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
          <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Login</Text>
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
