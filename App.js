import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import LoginScreen  from './screens/LoginScreen'
import AuthContextProvider, { AuthContext }from './store/auth-context';
import { useContext } from 'react';


const Stack = createNativeStackNavigator();

function AuthStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen}/>
    </Stack.Navigator>
  );
}

function AuthenticatedStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function Navegation(){
  const authCtx = useContext(AuthContext);

  return(
    <NavigationContainer>
      {/* { authCtx.isAuthenticated && <AuthStack />}
      { !authCtx.isAuthenticated && <AuthenticatedStack /> } */}
      <AuthenticatedStack />
    </NavigationContainer>
  )

}

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Navegation />
      </AuthContextProvider>
      <StatusBar style='light'/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
