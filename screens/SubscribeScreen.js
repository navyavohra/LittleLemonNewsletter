// screens/SubscribeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet, Image } from 'react-native';

export default function SubscribeScreen() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    Alert.alert('Thanks for subscribing, stay tuned!');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/little-lemon-logo.png')} style={styles.logo} />
      <Text style={styles.text}>Subscribe to our newsletter for our latest delicious recipes!</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your email"
        value={email}
        onChangeText={setEmail}
      />
      <Pressable
        style={[styles.button, email ? styles.buttonActive : styles.buttonInactive]}
        onPress={handleSubscribe}
        disabled={!email}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
  },
  buttonActive: {
    backgroundColor: '#4CAF50',
  },
  buttonInactive: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
