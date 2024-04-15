import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, TextInput, TouchableOpacity, Text, Pressable } from 'react-native';

import * as Font from 'expo-font';

// Load custom fonts
async function loadFonts() {
  await Font.loadAsync({
    'press-start-2p': require('..\\assets\\fonts\\PressStart2P-Regular.ttf'),
  });
}

loadFonts();

export default function LoginPage(){
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
      <ImageBackground source={require('..\\assets\\images\\login.jpg')} style={styles.backgroundImage} >
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
            secureTextEntry={true}
          />
           <View style={styles.buttonContainer}>
          <Pressable style={styles.buttonCancel} onPress={handleLogin}>
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>
          <Pressable style={styles.buttonLogin} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Login</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    alignSelf: 'center',
    fontFamily: 'press-start-2p',
    color: 'white',
    fontSize: 40
  },
  username:{
    alignSelf: 'flex-start',
    fontFamily: 'press-start-2p',
    color: 'white',
    fontSize: 15


  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    padding: 20,
    borderRadius: 8,
    minWidth: 300,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#DA6485',
  },
  buttonCancel: {
    backgroundColor: '#68021F',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 5,
    alignSelf:'center'
  },
  buttonLogin: {
    backgroundColor: '#68021F',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 5,
    alignSelf:'center'
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'press-start-2p',
  },
});




/*import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});*/
