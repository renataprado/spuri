import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import CalendarLine from '../components/CalendarLine'
import moment from 'moment';
import Colors from '../contants/colors'
import { Button, Input } from '@rneui/base';
import DayLog from '../components/DayLog';

const HomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState(moment());

  const onSelectDate = (date) => {
    setSelectedDate(moment(date));
  }
  return (
    <View style={styles.screen}>
      <View style={styles.upbar} />
      <CalendarLine onSelectDate={onSelectDate}></CalendarLine>
      <DayLog />
      {/* <HomeArea /> */}
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
  },
});

//rnfes snippet

const HomeArea = () => {
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    upbar: { 
      height: 30,
      backgroundColor: Colors.bg1
    },
    homeArea: {
      height: '80%',
      backgroundColor: 'white',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.homeArea}>
      <Button
        title={'Como foi o seu dia?'}
        buttonStyle={{
          borderRadius: 20,
          height: "50%",
        }}
        containerStyle={{
          marginHorizontal: 80,
          marginVertical: 0,
        }}
        icon={{
          name: "plus",
          type: "font-awesome",
          size: 36,
          color: "white",
        }}
        iconRight
        iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
      />
    </View>
  );

}