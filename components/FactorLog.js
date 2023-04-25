import {StyleSheet, Text, View } from 'react-native';
import { LinearProgress } from '@rneui/themed';

function FactorLog({ id='title', selectedRate=0.6, selectedChips=['um', 'dois', 'vinte e quatro'] }) {

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>{id}</Text>
      <View style={{width: '75%'}}>
        <LinearProgress 
          style={{ marginVertical: 10, height: 10, borderRadius: 10 }}
          value={selectedRate}
          variant="determinate"
        />
        <View style={styles.chipsContainer}>
         <Text>{selectedChips.join(", ")}</Text>
        </View>
      </View>
    </View>
  );
}

export default FactorLog;

const styles = StyleSheet.create({
  rootContainer:{
    height: 80,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    alignSelf: 'center'
  },
  chipsContainer: {
    flexDirection: 'row'
  }
});
