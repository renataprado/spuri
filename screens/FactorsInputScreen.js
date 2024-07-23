import { useState, useEffect } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { View, Image, StyleSheet, Text } from "react-native";

import { useNavigation } from '@react-navigation/native';
import ChipsInput from '../components/FactorInput/ChipsInput';
import { Button } from 'react-native-web';
import PrimaryButton from '../components/ui/PrimaryButton';
import FactorQuestion from '../components/ui/FactorQuestion';
import FactorSlider from '../components/ui/FactorSlider';
import ScreenNavigationBar from '../components/ui/ScreenNavigationBar';

const screenStack =
[
  {name: "Factors",  props:{ name: "Humor", chipsData}},
  {name: "Factors",  props:{ name: "Food", chipsData}},
]

function FactorsInputScreen({route}) {
  const navegation = useNavigation();
  const currentFactor = { ...route.params};

  return (
    <View style={styles.screen}>
       <Text>{currentFactor?.name} {route?.params?.currentScreen}</Text>
       <FactorQuestion />
       <FactorSlider />
      <View style={{ flex: 1}}/>
      <View style={{ flex: 2 }}>
       <ChipsInput chipsData={currentFactor.chipsData} />
      </View>
      <View style={{ flex: 3 }} >
    </View>
    <ScreenNavigationBar screenStack={screenStack}/>
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

const factorObj = {
  name: "First",
  chipsData: chipsData,

}

