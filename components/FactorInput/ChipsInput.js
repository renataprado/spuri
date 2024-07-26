import { StyleSheet, View, FlatList } from "react-native";
import ChipButton from "../ui/ChipButton";
import { useState, useEffect } from "react";


  const ChipsInput = ({ onChange, chipsData, setChipsData}) => {

    // const handleSelected = (id) => {
    //   const updatedChip = chipsData.map(chip => chip.id === id ? {...chip, selected: !chip.selected} : chip)
    //   onChange(updatedChip);
    // };
  
    return (
      <View style={styles.rootContainer}>
        {chipsData.map((chip) => (
          <View style={styles.chipContainer} key={chip.id}>
            <ChipButton chip={chip} handleSelected={onChange} />
          </View>
        ))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    rootContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
      backgroundColor: 'gray',
    },
    chipContainer: {
      marginVertical: 2,
    },
  });
  

export default ChipsInput;