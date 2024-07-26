import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const ChipButton = ({chip, handleSelected}) => {

  const handlePress = () => {
    handleSelected({...chip, selected: !chip.selected });
  };

  return (
    <TouchableOpacity
      style={chip.selected ? styles.colorButton : styles.outlineButton}
      onPress={handlePress}
    >
      <Text style={chip.selected ? styles.colorButtonText : styles.outlineButtonText}>
       {chip.label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outlineButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    padding: 8,
    margin: 8,
    minWidth: 80
  },
  outlineButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center'
  },
  colorButton: {
    borderWidth: 1,
    borderColor: '#6695c1',
    backgroundColor: '#6695c1',
    borderRadius: 20,
    padding: 8,
    margin: 8,
    minWidth: 80
  },
  colorButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center'
  },
});

export default ChipButton;
