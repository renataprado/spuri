import React, { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { signUp } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { View } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler({email, password}){
    setIsAuthenticating(true);
    try {
      const token = await signUp(email, password);
      authCtx.authenticate(token);      
    } catch (error) {
      Alert.alert('Erro', error.message);
      setIsAuthenticating(false);
    }
  }

  return(
    <View>
      <AuthContent onAuthenticate={signupHandler}/>
      { isAuthenticating ? <LoadingOverlay /> : <></>}
    </View>

  ) 
}


export default SignupScreen;