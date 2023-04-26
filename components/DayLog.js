import {StyleSheet, Text, View } from 'react-native';
import dayRecord from '../models/dayRecord';
import FactorLog from './FactorLog';

function DayLog(){
  const factors = dayRecord.factors.filter(factor => factor.id != 'humor');

  return (
    <View style={styles.rootContainer}>
      <View style={styles.humorSection}>

      </View>
      <View style={styles.factorsSection}>
        {factors.map((factor, index) => (
          <View key={index}>
            <FactorLog {... factor}/>
          </View>
        ))}
      </View>
    </View>
  );
}

export default DayLog;


const styles = StyleSheet.create({
  rootContainer: {
    margin: 0,
    flex: 1,
  },
  factorsSection:{
    justifyContent: 'flex-end', marginTop: 'auto'
  }
});