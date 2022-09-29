import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import CalendarLine from '../components/CalendarLine/CalendarLine'
import moment from 'moment';

const HomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState(moment());

  const onSelectDate = (date) => {
    setSelectedDate(moment(date));
  }
  return (
    <View>
      <Text>HomeScreen</Text>
      <CalendarLine onSelectDate={onSelectDate}></CalendarLine>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})

//rnfes snippet
