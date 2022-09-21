
import { app } from './firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

async function authenticate(mode, email, password){
  try {
    const response =  
      mode === "login"
      ? await signInWithEmailAndPassword(auth, email, password)
      : await createUsernWithEmailAndPassword(auth, email, password);
    const { idToken } = response._tokenResponse;
    return idToken;
  } catch (error) {
    const { code, message } = error.code;
    return { code, message };
  }
}

async function signUp(email, password){
  return authenticate('signup', email, password);
}

async function logIn(email, password){
  return authenticate('login', email, password);
}

export { signUp, logIn }