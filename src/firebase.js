import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC657eurQke3aNbQxenuYu4cLpobcGq-I0',
  authDomain: 'random-quote-generator-c5172.firebaseapp.com',
  projectId: 'random-quote-generator-c5172',
  storageBucket: 'random-quote-generator-c5172.appspot.com',
  messagingSenderId: '1017571743203',
  appId: '1:1017571743203:web:93fec28dec9e38330e3cd6',
  measurementId: 'G-347597YWF7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
