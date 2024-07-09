import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native'


const ScreenNavigationBar = ({onPress}) => {
  const navigation = useNavigation();
  const test = 1;
  return (
    <View>
      <Button
        title="Press me"
        onPress={onPress}
      />
    </View>
  ) 
}

export default ScreenNavigationBar