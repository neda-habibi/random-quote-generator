import React from 'react';
import PropTypes from 'prop-types';
import { auth, googleProvider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import './Login.css';

const Login = ({ setUser }) => {
  const signInWithGoogle = async () => {
    try {
      console.log('hi'); // Debugging line
      const result = await signInWithPopup(auth, googleProvider);
      console.log('signInWithPopup called'); // Debugging line
      console.log('User signed in:', result.user); // Debugging line
      setUser(result.user);
    } catch (error) {
      console.error('Error signing in with Google:', error); // Debugging line
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (
    <div className="Login">
      <h1>Random Quote Generator</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Login;
