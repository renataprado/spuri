import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, Alert, Image } from 'react-native';
import { Button, Input } from '@rneui/base';
import React, { useContext, useState } from 'react'

import AuthContent from '../components/Auth/AuthContent';


const LoginScreen = () => {

  
  const [action, setAction] = useState('');

  //adicionar verificacoes do firebase senha minimo 6 caracteres.
 

  const handleRegister = async () => {
    try {
      const token = await signUp(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  }

  return (
      <AuthContent isLogin />
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white"
  }
});