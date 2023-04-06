
import { app, admin } from './firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

async function authenticate(mode, email, password){
  try {
    const response =  
      mode === "login"
      ? await signInWithEmailAndPassword(auth, email, password)
      : await createUserWithEmailAndPassword(auth, email, password);
    const { idToken } = response._tokenResponse;
    return idToken;
  } catch (error) {
    const { code, message } = error;
    console.log(code)
    return {code, message};
  }
}

async function isUserEmail(email){
  const response = await signUp(email, 'vazio123');
  console.log(response)
  if(response.code.includes('email-already-in-use')){
    return true;
  }
  return false;

}

async function signUp(email, password){
  return authenticate('signup', email, password);
}

async function logIn(email, password){
  return authenticate('login', email, password);
}

function Error(code){
  let message;
  code.includes('invalid-email') ? message = "Email inválido" : message;
  code.includes('wrong-password') ? message = "Senha errada" : message;
  code.includes('email-already-in-use') ? message = "Essa conta já existe" : message;
  return { message };
}

export { signUp, logIn, isUserEmail }