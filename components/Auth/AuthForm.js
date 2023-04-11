import { Input } from "@rneui/base";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../contants/colors";
import TextInput from "../ui/TextInput";
import { useState } from "react";
import PrimaryButton from "../ui/PrimaryButton";

function LoginForm({ isLogin, submitHandler}) {
  const [enteredEmail, setenteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }
  
  return (
    <View>
      <View style={{ width: "80%", alignSelf: "center" }}>
        <TextInput onChangeText={(t) => setenteredEmail(t)} value={enteredEmail}>
          Email
        </TextInput>
        {!isLogin && (
          <TextInput
            onChangeText={(t) => setEnteredConfirmEmail(t)}
            value={enteredConfirmEmail}
          >
            confirme email
          </TextInput>
        )}
        <TextInput onChangeText={(t) => setEnteredPassword(t)} value={enteredPassword}>
          senha
        </TextInput>
        {!isLogin && (
          <TextInput
            onChangeText={(t) => setEnteredConfirmPassword(t)}
            value={enteredConfirmPassword}
          >
            confirme senha
          </TextInput>
        )}

        <Text>{enteredEmail}</Text>
        <PrimaryButton>
          { isLogin ? 'Entrar' : 'Registrar-se'}
        </PrimaryButton>
      </View>
    </View>
  );
}

export default LoginForm;

const styles = StyleSheet.create({
  inputStyle: {
    color: Colors.pink_light,
  },
  containerStyle: {
    marginBottom: -10,
    marginTop: -5,
  },
  inputContainer: {
    backgroundColor: Colors.white,
    padding: 2,
    borderWidth: 6,
    borderColor: Colors.white,
    borderRadius: 10,
  },
  buttonStyle: {
    backgroundColor: Colors.blue_light,
    borderRadius: 5,
    height: 50,
    padding: 10,
  },
});
