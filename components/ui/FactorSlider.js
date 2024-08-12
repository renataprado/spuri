import { Slider } from "@rneui/base";
import { useState } from "react";
import { View, Text } from "react-native-web";

const FactorSlider = ({ rating }) => {
  const { 
          type, 
          maximumValue, 
          minimumValue, 
          rateValues, 
          unit, 
          step, title
        } = rating;
  const initialValue = type === "fixed" ? 3 : minimumValue;
  
  const [value, setValue] = useState(initialValue);

  return (
    <View>
      <Text>{title}</Text>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={maximumValue ? maximumValue : 5}
        minimumValue={minimumValue ? minimumValue : 1}
        step={step ? step : 1}
        thumbStyle={{ height: 20, width: 20, backgroundColor: "red" }}
      />
      {
        rateValues && 
        <Text>{rateValues[value-1].description}</Text>
      }
      
    </View>
  );
};

export default FactorSlider;

const fixed = {
  type: "fixed",
  rateValues: [{ value: 0, description: "péssimo" }],
};

const range = {
  type: "range",
  minimumValue: 1,
  maximumValue: 30,
  step: 5,
  unit: "Minutos",
};
