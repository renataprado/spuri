import AuthContent from '../components/Auth/AuthContent';
import { View, Image, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import SecundaryButton from "../components/ui/SecundaryButton";
import Logo from '../components/Logo'
import { useNavigation } from '@react-navigation/native';

function StartScreen() {
  const navegation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1}}/>
      <View style={{ flex: 2 }}>
        <Logo />
      </View>
      <View style={{ flex: 3 }} >
        <View style={{width: "80%", alignSelf: "center"}}>
          <PrimaryButton onPress={() => navegation.replace('Login')}> Entrar </PrimaryButton>
          <SecundaryButton onPress={() => navegation.replace('Signup')}> Registrar-se </SecundaryButton>
        </View>
    </View>
  </View>
  );
}

export default StartScreen;