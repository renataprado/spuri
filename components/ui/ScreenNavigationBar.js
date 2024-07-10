import { Alert, Button, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const ScreenNavigationBar = () => {
  const navigator = useNavigation();
  let currentScreen = 0;

  const screenStack =
  [
    {name: "Factors"},
    {name: "Start"},
    {name: "Login"},
    {name: "Profile", props:{ name: "Jane"}},
  ]
  const nextPress = () => {
    navigator.navigate(screenStack[currentScreen].name, screenStack[currentScreen].props)

    if(currentScreen < screenStack.length-1){
      currentScreen++;
    } else {
      currentScreen = 0;
    }
  }


  return (
    <View>
      <Button
        title="next"
        onPress={nextPress}
      />
      <Button
        title="previous"
        onPress={() => {navigator.goBack()}}
      />
    </View>
  ) 
}

export default ScreenNavigationBar