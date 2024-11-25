import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChipButton from './ChipButton';
import ChipsInput from '../FactorInput/ChipsInput';

const FactorQuestion = ({question, onChange}) => {
  const { statement, qualifier } = question

  return (
    <View style={styles.rootContainer}>
      <Text>{statement}</Text>
      <ChipsInput qualifier={qualifier} onChange={onChange} />
    </View>
  ) 
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    backgroundColor: 'gray',
  },
  chipContainer: {
    marginVertical: 2,
  },
});

export default FactorQuestion;

