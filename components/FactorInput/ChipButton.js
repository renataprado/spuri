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
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
  outlineButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  colorButton: {
    borderWidth: 2,
    borderColor: 'lightblue',
    backgroundColor: 'lightblue',
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
  colorButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ChipButton;
