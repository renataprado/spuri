import { View, Image, StyleSheet, Text } from "react-native";
import { Button, Input } from "@rneui/base";
import React, {useState} from "react";

function StartComponent( {setAction}) {

  return (
    <View>
      <View
        style={{
          width: "80%",
          alignSelf: "center",
        }}
      >
        <Button
          title="Entrar"
          onPress={() => setAction('login')}
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "lightblue",
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
          }}
          containerStyle={{
            width: "100%",
            height: 60,
          }}
        />
        <Button
          title="Registrar-se"
          onPress={() => setAction('signup')}
          titleStyle={{ fontWeight: "700", color: "lightblue" }}
          buttonStyle={{
            backgroundColor: "transparent",
            borderColor: "lightblue",
            borderWidth: 2,
            borderRadius: 5,
          }}
          containerStyle={{
            width: "100%",
            height: 60,
          }}
        />
      </View>
    </View>
  );
}

export default StartComponent;

const styles = StyleSheet.create({});
