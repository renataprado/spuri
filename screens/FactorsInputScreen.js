import { useState, useEffect } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { View, Image, StyleSheet, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import ChipsInput from "../components/FactorInput/ChipsInput";
import { Button } from "react-native-web";
import PrimaryButton from "../components/ui/PrimaryButton";
import FactorQuestion from "../components/ui/FactorQuestion";
import FactorSlider from "../components/ui/FactorSlider";
import ScreenNavigationBar from "../components/ui/ScreenNavigationBar";

function FactorsInputScreen({ route, initialParams }) {
  const screenStack = [
    { name: "Factors", props: { name: "Humor" } },
    { name: "Factors", props: { name: "Food" } },
  ];

  const [Factors, setFactors] = useState([
    {
      name: "Humor",
      chipsData: [
        { id: "1", label: "Humor1", selected: false },
        { id: "2", label: "Humor2", selected: false },
      ],
    },
    {
      name: "Food",
      chipsData: [
        { id: "1", label: "Food1", selected: false },
        { id: "2", label: "Food2", selected: false },
        { id: "3", label: "Food3", selected: false },
      ],
    },
  ]);

  const [currentFactor, setCurrentFactor] = useState(null);

  useEffect(() => {
    setCurrentFactor(Factors.find(Factor => Factor.name === route.params.name))
  }, [route]);

  const handleOnChangeChips = (updatedChip) => {
    const { chipsData } = currentFactor;
    const updatedChipsData = chipsData.map((chip) =>
      chip.id === updatedChip.id ? updatedChip : chip
    );

    setCurrentFactor((prevState) => ({
      ...prevState,
      chipsData: updatedChipsData,
    })); 

    setFactors(prevFactors => prevFactors.map(factor =>
      factor.name === currentFactor.name ? { ...factor, chipsData: updatedChipsData } : factor
    ));
  };

  return (
    <View style={styles.screen}>
      <Text>
        {route?.params?.currentScreen}
      </Text>
      <FactorQuestion />
      <FactorSlider />
      <View style={{ flex: 1 }} />
      {
        currentFactor &&
        <View style={{ flex: 2 }}>
        <Text>{currentFactor.chipsData[0].label}</Text>
        <ChipsInput chipsData={currentFactor?.chipsData} onChange={handleOnChangeChips}/>
      </View>
      }
      <View style={{ flex: 3 }}></View>
      <ScreenNavigationBar screenStack={screenStack} />
      {/* <PrimaryButton
        onPress={() => {
          console.log(factor);
        }}
      >
        'print state'
      </PrimaryButton> */}
    </View>
  );
}

export default FactorsInputScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "lightgray",
  },
});
