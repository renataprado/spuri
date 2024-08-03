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
import {mock} from "../factorMock";

const FactorsInputScreen = ({ route, initialParams }) => {
  const screenStack = [
    { name: "Factors", props: { name: "Exercise" } },
    { name: "Factors", props: { name: "Humor" } },
    { name: "Factors", props: { name: "Food" } },
  ];

  const [Factors, setFactors] = useState(mock.factors);

  const [currentFactor, setCurrentFactor] = useState(null);

  useEffect(() => {
    setCurrentFactor(Factors.find(Factor => Factor.name === route.params.name));
  }, [route]);

  const updateFactor = (update) => {
    setFactors(prevFactors => prevFactors.map(factor =>
      factor.name === currentFactor.name ? { ...factor, ...update} : factor
    ));
  }

  const updateQualifier = (updatedChipsData) => {
    const qualifier = { ...currentFactor.qualifier,  ...updatedChipsData }

    setCurrentFactor((prevState) => ({
      ...prevState,
      qualifier,
    })); 

    updateFactor(qualifier)
  };

  const updateQuestion = (updatedChipsData) => {
    const question = {...currentFactor.question, 
      qualifier: { ...currentFactor.qualifier,  ...updatedChipsData }
    }

    setCurrentFactor((prevState) => ({
      ...prevState,
      question
    }));

    updateFactor(question)
  }

  return (
    <View style={styles.screen}>
      <Text>
        {currentFactor?.name}
      </Text>
      {
        currentFactor?.question && <FactorQuestion question={currentFactor.question} onChange={updateQuestion}/>
      }      
      <FactorSlider />
      <View style={{ flex: 1 }} />
      {
        currentFactor &&
        <View style={{ flex: 2 }}>
        <ChipsInput qualifier={currentFactor?.qualifier} onChange={updateQualifier}/>
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
