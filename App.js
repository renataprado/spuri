import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import LoginScreen  from './screens/LoginScreen'
import StartScreen from './screens/StartScreen';
import SignupScreen from './screens/SignUpScreen';
import FactorsInputScreen from './screens/FactorsInputScreen';
import AuthContextProvider, { AuthContext }from './store/auth-context';
import ScreenNavigationBar from './components/ui/ScreenNavigationBar';
import { useContext } from 'react';
import { Button } from 'react-native-web';


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen  options={{ headerShown: false }} name="Start" component={StartScreen} />
      <Stack.Screen  options={{ headerShown: false }} name="Login" component={LoginScreen} />
      <Stack.Screen  options={{ headerShown: false }} name="Signup" component={SignupScreen} />
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
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

function TestStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Factors" component={FactorsInputScreen} />
      <Stack.Screen  options={{ headerShown: false }} name="Start" component={StartScreen} />
      <Stack.Screen  options={{ headerShown: false }} name="Login" component={LoginScreen} />
      <Stack.Screen  options={{ headerShown: false }} name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  )
}

function Navegation(){
  const authCtx = useContext(AuthContext);
  return(
    <NavigationContainer>
      {/* { authCtx.isAuthenticated && <AuthStack />}
      { !authCtx.isAuthenticated && <AuthenticatedStack /> } */}
      <TestStack />
      <ScreenNavigationBar />
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
