import AuthContent from '../components/Auth/AuthContent';
import { View, Image, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ChipsInput from '../components/FactorInput/ChipsInput';

function FactorsInputScreen() {
  const navegation = useNavigation();

  return (
    <View style={styles.screen}>
       <Text>Input</Text>
      <View style={{ flex: 1}}/>
      <View style={{ flex: 2 }}>
       <ChipsInput />
      </View>
      <View style={{ flex: 3 }} >
    </View>
  </View>
  );
}

export default FactorsInputScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'lightgray'
  },
});