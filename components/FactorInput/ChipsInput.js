import { StyleSheet, View, FlatList } from "react-native";
import ChipButton from "../ui/ChipButton";
import { useState } from "react";


  const ChipsInput = ({ onChange, chipsData }) => {
    const [chips, setChips] = useState(chipsData);
  
    // const handleSelected = (id) => {
    //   const updatedChips = chips.map((chip) =>
    //     chip.id === id ? { ...chip, selected: true } : chip
    //   );
    //   setChips(updatedChips);
    // };

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