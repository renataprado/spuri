import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import CalendarLine from '../components/CalendarLine/CalendarLine'
import moment from 'moment';
import Colors from '../contants/colors'

const HomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState(moment());

  const onSelectDate = (date) => {
    setSelectedDate(moment(date));
  }
  return (
    <View style={styles.screen}>
      <View style={styles.upbar} />
      <CalendarLine onSelectDate={onSelectDate}></CalendarLine>
    </View>
  )
}



export default HomeScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  upbar: { 
    height: 30,
    backgroundColor: Colors.bg1
  }
});

//rnfes snippet

const HomeArea = () => {

}