import { View, Text, StyleSheet } from 'react-native';
import ChipButton from './ChipButton';

const FactorQuestion = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>Question</Text>
      <ChipButton chip={{id: "y", label: "sim", selected: false }} />
      <ChipButton chip={{id: "n", label: "não", selected: false }} />
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

