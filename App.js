import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, TextInput, TouchableOpacity, Text } from 'react-native';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logica pentru autentificare
    console.log('Autentificare cu:', username, password);
  };

  const handleSignUp = () => {
    // Navigare către pagina de înregistrare
    console.log('Navigare către pagina de înregistrare');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('C:\Users\Dudu\Desktop\FACULTA\IC\login_page_backgroundPicture')} style={styles.backgroundImage}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nume utilizator"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Parola"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Autentificare</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Creează un cont</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 8,
    minWidth: 300,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default LoginPage;
