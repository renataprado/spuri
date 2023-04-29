import { StyleSheet, View, FlatList } from "react-native";
import ChipButton from "./ChipButton";
import { useState } from "react";

  const chipsData = [
    { id: '1', label: 'Botão 1', selected: false },
    { id: '2', label: 'Botão 2', selected: false },
    { id: '3', label: 'Botão 3', selected: false },
    { id: '4', label: 'Botão 4', selected: false },
    { id: '5', label: 'Botão 5', selected: false },
    { id: '6', label: 'Botão 6', selected: false },
    { id: '7', label: 'Botão 7', selected: false },
    { id: '8', label: 'Botão 8', selected: false },
    { id: '9', label: 'Botão 9', selected: false },
  ];
  
  const ChipsInput = ({ onChange }) => {
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