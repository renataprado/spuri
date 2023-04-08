import { View, Image, StyleSheet, Text } from "react-native";
import { Button, Input } from "@rneui/base";
import React from "react";

function StartComponent() {
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
