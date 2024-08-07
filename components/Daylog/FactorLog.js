import {StyleSheet, Text, View } from 'react-native';
import { LinearProgress } from '@rneui/themed';
import { factorSelector } from '../../models/Factors';
import Colors from '../../contants/colors'


function FactorLog( { id, selectedRate, selectedChips }) {
  const Factor = factorSelector(id);
  const decimalRate = Factor.calculateDecimalRate(selectedRate);
  const backgroundColor = Colors[id+"Primary"];

  return (
    <View style={[styles.rootContainer, {backgroundColor: backgroundColor}]}>
      <View style={{maxWidth: '24%'}}>
        <Text style={styles.title}>{Factor.name}</Text>
      </View>
      <View style={{width: '73%'}}>
        <LinearProgress 
          style={styles.linearProgress}
          value={decimalRate}
          color={Colors[id+"Dark"]}
          trackColor='#959595'
          variant="determinate"
        />
        <View style={styles.chipsContainer}>
         <Text style={{color: 'white'}}>{selectedChips.join(", ")}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer:{
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 12,
    alignSelf: 'center',
    color: 'white'
  },
  linearProgress: {
    marginVertical: 10, 
    height: 10, 
    borderRadius: 10,

  },
  chipsContainer: {
    flexDirection: 'row',
  }
});

export default FactorLog;


