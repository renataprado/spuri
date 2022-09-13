import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Button, Input } from '@rneui/base';
import React from 'react'
import { useState } from 'react';
import { app } from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleRegister = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      console.log(user)
    } catch (error) {
      alert(error.message);
    }

    console.log(email, password)
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer} >
        <Input 
          placeholder="e-mail" 
          onChangeText={(text) => setEmail(text)}
        />
        <Input 
          placeholder="password" 
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login"></Button>
        <Button 
          title="Register"
          onPress={handleRegister}
        />
      </View>
      <StatusBar></StatusBar>

    </KeyboardAvoidingView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: '80%'
  }
});