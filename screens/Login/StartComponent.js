import { View, Image, StyleSheet, Text } from "react-native";
import { Button, Input } from "@rneui/base";
import React, {useState} from "react";
import PrimaryButton from "../../components/ui/PrimaryButton";
import SecundaryButton from "../../components/ui/SecundaryButton";

function StartComponent( {setAction}) {

  return (
    <View>
      <View
        style={{
          width: "80%",
          alignSelf: "center",
        }}
      >
        <PrimaryButton onPress={() => setAction('login')}> Entrar </PrimaryButton>
        <SecundaryButton onPress={() => setAction('signup')}> Registrar-se </SecundaryButton>
      </View>
    </View>
  );
}

export default StartComponent;

const styles = StyleSheet.create({});
