import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, Alert, Image } from 'react-native';
import { Button, Input } from '@rneui/base';
import React, { useContext, useState } from 'react'

import Colors from '../../contants/colors';
import FormLogin from '../../components/FormLogin';
import Logo from '../../components/Logo'
import StartComponent from './StartComponent';
import LoginForm from '../../components/Auth/AuthForm';
import AuthContent from '../../components/Auth/AuthContent';


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
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1}}/>
        <View style={{ flex: 2 }}>
          <Logo />
        </View>
        <View style={{ flex: 3 }} >
          {/* <Text>{action}</Text>
          { !action ? <StartComponent setAction={setAction}/> : 
            action === 'login' ? <LoginForm isLogin setAction={setAction} /> : <></>
          }
           */}
           <AuthContent />
        </View>

      {/* <FormLogin /> */}

      <StatusBar></StatusBar>
      </View>

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