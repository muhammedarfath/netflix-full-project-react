// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbDHj3NqfW0rMpnuqeDF6h1JiUa9mG8bE",
    authDomain: "netflix-8eef1.firebaseapp.com",
    projectId: "netflix-8eef1",
    storageBucket: "netflix-8eef1.appspot.com",
    messagingSenderId: "41500578932",
    appId: "1:41500578932:web:d0f49fa6389b38d49aad21"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }