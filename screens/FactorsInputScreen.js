import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { View, Image, StyleSheet, Text } from "react-native";

import { useNavigation } from '@react-navigation/native';
import ChipsInput from '../components/FactorInput/ChipsInput';
import { Button } from 'react-native-web';
import PrimaryButton from '../components/ui/PrimaryButton';

function FactorsInputScreen() {
  const navegation = useNavigation();

  const [factor, setFactor] = useState({chipsData});


  return (
    <View style={styles.screen}>
       <Text>Input</Text>
      <View style={{ flex: 1}}/>
      <View style={{ flex: 2 }}>
       <ChipsInput chipsData={factor.chipsData} />
      </View>
      <View style={{ flex: 3 }} >
    </View>
    <PrimaryButton  onPress={() => {console.log(factor)}}>
      'print state'
    </PrimaryButton>
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



const chipsData = [
  { id: '1', label: 'Botão 1', selected: false },
  { id: '2', label: 'Botão 2', selected: false },
  { id: '3', label: 'Botão 3', selected: false },
  { id: '4', label: 'Botão 4', selected: false },
  { id: '5', label: 'Botão 5', selected: false },
  { id: '6', label: 'Botão 6', selected: false },
  { id: '7', label: 'Botão 7', selected: false },
  { id: '8', label: 'Botão 8', selected: false },
  { id: '9', label: 'Botão 9', selected: false },
];
