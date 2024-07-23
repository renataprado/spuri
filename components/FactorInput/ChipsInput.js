import { StyleSheet, View, FlatList } from "react-native";
import ChipButton from "../ui/ChipButton";
import { useState, useEffect } from "react";


  const ChipsInput = ({ onChange, chipsData, setChipsData}) => {
    const [chips, setChips] = useState(chipsData);

    useEffect(() => {
      setChips(chipsData)
      console.log(chipsData)
    }, [chipsData])
    
    
    const handleSelected = (id) => {
      setChips(prevChips => {
        return prevChips.map(chip => {
          if (chip.id === id) {
            return {
              ...chip,
              selected: !chip.selected,
            };
          }
          return chip;
        });
      });
    };
  
    return (
      <View style={styles.rootContainer}>
        {chips.map((chip) => (
          <View style={styles.chipContainer} key={chip.id}>
            <ChipButton chip={chip} handleSelected={handleSelected} />
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