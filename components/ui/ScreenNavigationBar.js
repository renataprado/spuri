import { Alert, Button, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';


const ScreenNavigationBar = ({screenStack}) => {
  const navigator = useNavigation();
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextPress = () => {
    navigator.navigate(screenStack[currentScreen].name, screenStack[currentScreen].props)

    if(currentScreen < screenStack.length-1){
      setCurrentScreen(currentScreen+1);  
    } else {
      setCurrentScreen(0);
    }
  }

  const backPress = () => {
    navigator.navigate(screenStack[currentScreen].name, screenStack[currentScreen].props)

    if(currentScreen > 0){
      setCurrentScreen(currentScreen-1);
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
        onPress={backPress}
      />
    </View>
  ) 
}

export default ScreenNavigationBar