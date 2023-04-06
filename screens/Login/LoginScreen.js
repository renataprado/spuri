import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, Alert } from 'react-native';
import { Button, Input } from '@rneui/base';
import React, { useContext } from 'react'
import { useState } from 'react';

import Colors from '../../contants/colors';
import FormLogin from '../../components/FormLogin';

const LoginScreen = () => {

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
    <KeyboardAvoidingView style={styles.container}>
      <View style={{ width: "80%" }}>
       <FormLogin />
      </View>
      <StatusBar></StatusBar>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});