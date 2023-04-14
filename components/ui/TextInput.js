import { Input } from "@rneui/themed";
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
  // inputStyle: {
  //   fontSize: 14,
  //   color: Colors.pink_light,
  //   padding: 10,
  // },
  // containerStyle: { 
  //   marginBottom: -10,
  // },
  // inputContainer: {
  //   height: 40,
  //   backgroundColor: Colors.white,
  //   borderColor:  Colors.white,
  //   borderRadius: 10
  // },
});