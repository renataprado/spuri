import { Input } from '@rneui/base';
import { StyleSheet, View } from 'react-native';
import Colors from '../../contants/colors'


function LoginForm () {
  return (
    <View>
      <View style={{ width: "80%", alignSelf: "center" }}>
        <Input
          placeholder="email"
          inputStyle={styles.inputStyle}
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainer}
          // errorMessage={form.formErrors.email}
        />
        <Input
          placeholder="senha"
          inputStyle={styles.inputStyle}
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainer}
          // errorMessage={form.formErrors.email}
        />
      </View>
    </View>
  );
}

export default LoginForm;

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
  buttonStyle: {
    backgroundColor: Colors.blue_light,
    borderRadius: 5,
    height: 50,
    padding: 10,
  }
});