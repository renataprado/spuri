import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, Alert, Image } from 'react-native';
import { Button, Input } from '@rneui/base';
import React, { useContext, useState } from 'react'

import AuthContent from '../components/Auth/AuthContent';
import { logIn } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';



const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);

  async function loginHandler({email, password}){
    setIsLoading(true);
    try {
      const token = await logIn(email, password);
      authCtx.authenticate(token);      
    } catch (error) {
      Alert.alert('Erro', error.message);
      setIsLoading(false);
    }
  }

  return (
    <View>
      <AuthContent isLogin onAuthenticate={loginHandler}/>
      { isLoading ? <LoadingOverlay /> : <></>}
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