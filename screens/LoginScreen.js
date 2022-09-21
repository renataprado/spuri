import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, Alert } from 'react-native';
import { Button, Input } from '@rneui/base';
import React, { useContext } from 'react'
import { useState } from 'react';
import { logIn, signUp } from '../util/auth';
import {AuthContext} from '../store/auth-context'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authCtx = useContext(AuthContext)
  //adicionar verificacoes do firebase senha minimo 6 caracteres.
 

  const handleRegister = async () => {
    try {
      const token = await signUp(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  }

  const handleLogin = async () => {
    try {
      const token = await logIn(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
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
        <Button
          title="Login"
          onPress={handleLogin}>
        </Button>
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