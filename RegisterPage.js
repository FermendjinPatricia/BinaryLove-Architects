import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, CheckBox } from 'react-native';

const RegisterPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [isOrganizer, setIsOrganizer] = useState(false);

  const handleRegister = () => {
    if (isOrganizer) {
      // Navigare către pagina de organizator
      console.log('Navigare către pagina de organizator');
    } else {
      // Navigare către homepage
      console.log('Navigare către homepage');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nume utilizator"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Data nasterii (YYYY-MM-DD)"
          onChangeText={(text) => setBirthdate(text)}
          value={birthdate}
          keyboardType="numeric"
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isOrganizer}
            onValueChange={setIsOrganizer}
          />
          <Text style={styles.checkboxLabel}>Doresc să fiu un organizator</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Înregistrare</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    minWidth: 300,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#f2f2f2',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
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

export default RegisterPage;
