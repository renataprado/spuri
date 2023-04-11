import { Input } from "@rneui/base";
import { StyleSheet } from 'react-native';
import Colors from '../../contants/colors'

function TextInput({children, onChangeText, value}) {

  return (
    <Input
      placeholder={children}
      inputStyle={styles.inputStyle}
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainer}
      onChangeText={onChangeText}
      value={value}
      // errorMessage={form.formErrors.email}
    />
  )
}


export default TextInput;

const styles = StyleSheet.create({
  inputStyle: {
    color: Colors.pink_light
  },
  containerStyle: { 
    marginBottom: -10,
    marginTop: -5,
  },
  inputContainer: {
    backgroundColor: Colors.white,
    padding: 2,
    borderWidth: 6,
    borderColor:  Colors.white,
    borderRadius: 10
  },
});