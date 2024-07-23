import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const ChipButton = ({chip, handleSelected}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
    handleSelected(chip.id);
  };

  return (
    <TouchableOpacity
      style={isPressed ? styles.colorButton : styles.outlineButton}
      onPress={handlePress}
    >
      <Text style={isPressed ? styles.colorButtonText : styles.outlineButtonText}>
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
