import { View, Text } from 'react-native';
import ChipButton from '../FactorInput/ChipButton';

const FactorQuestion = () => {
  return (
    <View>
      <Text>Question</Text>
      <ChipButton chip={{id: "y", label: "sim", selected: false }} />
      <ChipButton chip={{id: "n", label: "não", selected: false }} />
    </View>
  ) 
}

export default FactorQuestion;