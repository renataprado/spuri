import { StyleSheet, Text, View, Alert, TextInput} from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import Colors from '../contants/colors'
import { Button, Input } from '@rneui/base';
import { AuthContext } from '../store/auth-context';
import { isUserEmail, logIn, signUp} from '../util/auth';

const FormLogin = (props) => {

  const authCtx = useContext(AuthContext);
  const [form, setForm] = useState({
    email: '',
    password: '',
    emailValid: false,
    passwordValid: false,
    formValid: false
  })
  const [stage, setStage] = useState(
    {
      action: 'Continuar',
      onPress: onContinue
    }
  )

  useEffect(() => {
   console.log(form);
  }, [form])
  

  function handleUserInput (value, name) {
    const newForm = ({...form, [name]: value})
    setForm(prevForm => {
      ({...prevForm, ...newForm});
    });
  }

  const validateForm = () => {
    // let { 
    //   email,
    //   password,
    //   emailValid, 
    //   passwordValid, 
    // } = form;
    
    emailValid = validateEmail(email)
    fieldValidationErrors.email = emailValid ? '' : 'email inválido';
    passwordValid = (password.lenght >= 6);
    fieldValidationErrors.password = passwordValid ? '': 'senha deve ter ao menos 6 caracteres';

    setForm({...form,
      emailValid: emailValid,
      passwordValid: passwordValid,
      formErrors: fieldValidationErrors,
      formValid: emailValid && passwordValid
    });
    
  }

  const validateEmail = (text) => {
    const reg = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");;
    return(reg.test(text))
  };

  async function onContinue(){
    const validEmail = validateEmail(form.email);
    console.log('continue')
    console.log(form.email)
    if(form.emailValid){
      const isUser = await isUserEmail(email);
      isUser
      ? setStage({
        action: 'Entrar',
        onPress: onLogin
      }) 
      : setStage({  
        action: 'Registrar',
        onPress: onSignup
      })
    }
  }

  async function onLogin(){
    const response = await logIn(email, password);
    response.token ? authCtx.authenticate(token) : Alert.alert('Erro', getErrorMessage(code));
  }

  async function onSignup(){
    const response = await logIn(email, password);
    response.token ? authCtx.authenticate(token) : Alert.alert('Erro', getErrorMessage(code));
  }

  function getErrorMessage(code){
    const errors = {
      'invalid-email': 'Email inválido',
      'wrong-password': 'Senha errada',
      'email-already-in-use': 'Essa conta já existe'
    }
    errors.keys(obj).forEach((key) => {
      if (code.includes(key)){
        return errors[key];
      }
    });
    return code
  }



  return (
    <View>
      <TextInput>

      </TextInput>
      <Input
        placeholder="email"
        onChangeText={(t) => handleUserInput(t, 'email')}
        inputStyle={styles.inputStyle}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainer}
        // errorMessage={form.formErrors.email}
      />
      {
        stage.action != 'Continuar'
        ? <Input
            placeholder="senha"
            secureTextEntry={true}
            onChangeText={(t) => handleUserInput(t, 'password')}
            inputStyle={styles.inputStyle}
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainer}
        	/> 
        : <></>
      }
      {
        stage.action == 'Registrar'
        ? <Input
            placeholder="confirme a senha"
            secureTextEntry={true}
            onChangeText={(t) => handleUserInput(t, 'password')}
            inputStyle={styles.inputStyle}
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainer}
        	/> 
        : <></>
      }

      <Button
        title={stage.action}
        onPress={stage.onPress}
        buttonStyle={styles.buttonStyle}
        containerStyle={{
          marginHorizontal: 5,
          marginVertical: 10,
        }}
        icon={{
          name: 'arrow-right',
          type: 'font-awesome',
          size: 16,
          color: 'white',
        }}
        iconRight
        iconContainerStyle={{ marginLeft: 20, marginRight: -20 }}
        titleStyle={{ fontWeight: "bold" }}
      />
    </View>
  );
}

export default FormLogin;

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
    borderRadius: 30,
    height: 50,
    padding: 10,
  }
});