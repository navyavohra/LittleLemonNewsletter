// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/little-lemon-logo.png')} style={styles.logo} />
      <Text style={styles.text}>Little Lemon, your local Mediterranean Bistro</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Subscribe')}>
        <Text style={styles.buttonText}>Newsletter</Text>
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
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
