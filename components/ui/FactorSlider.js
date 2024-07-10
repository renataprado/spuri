import { Slider } from "@rneui/base"
import { useState } from "react";

const FactorSlider = () => {
  const [value, setValue] = useState();

  return (
    <Slider
    value={value}
    onValueChange={setValue}
    maximumValue={5}
    minimumValue={0}
    step={1}
    thumbStyle={{ height: 20, width: 16, backgroundColor: 'transparent' }}
  />
  ) 
}

export default FactorSlider;