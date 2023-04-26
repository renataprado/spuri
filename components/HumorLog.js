import {StyleSheet, Text, View, Image } from 'react-native';
import dayRecord from '../models/dayRecord';
import colors from '../contants/colors';
import face0 from '../assets/humors/face0.png'
import face1 from '../assets/humors/face1.png'
import face2 from "../assets/humors/face2.png";
import face3 from "../assets/humors/face3.png";
import face4 from "../assets/humors/face4.png";

const faces = {
  0: face0,
  1: face1,
  2: face2,
  3: face3,
  4: face4,
};

function HumorLog({selectedRate, selectedChips}){

  return (
    <View style={[styles.rootContainer, {backgroundColor: colors["humor"+selectedRate]}]}>
      <View style={styles.humorSection}>
        <Image source={faces[selectedRate]} style={styles.face} />
      </View>
      <View style={styles.chipsContainer}>
        <Text style={styles.chipsText}>{selectedChips.join(", ")}</Text>
      </View>
    </View>
  );
}

export default HumorLog;


const styles = StyleSheet.create({
  rootContainer: {
    margin: 0,
    height: '100%',
    backgroundColor: colors.scale7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  factorsSection:{
    justifyContent: 'flex-end', marginTop: 'auto'
  },
  chipsContainer: {
    flexDirection: 'row',
  },
  chipsText: {
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 16
  },
  face: { 
    alignSelf:"center", 
    resizeMode: 'contain', 
    height: 120, 
    width: 160,
  },
});