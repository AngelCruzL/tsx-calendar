import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { useForm } from '../../hooks/useForm';
import { startLogin, startRegister } from '../../actions/auth';

import './login.css';

interface FormLogin {
  loginEmail: string;
  loginPassword: string;
}

function LoginScreen() {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
    loginEmail: 'email@email.com',
    loginPassword: '1234567',
  });

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    registerName: 'Cool Name',
    registerEmail: 'cool@email.com',
    registerPassword: '1234567',
    registerPasswordConfirmation: '1234567',
  });

  const { loginEmail, loginPassword } = formLoginValues;
  // prettier-ignore
  const { registerEmail,registerName,registerPassword,registerPasswordConfirmation } = formRegisterValues;

  const toggleSignInState = (signInForm = true) => {
    const container = document.getElementById('container');

    if (container)
      signInForm
        ? container.classList.add('right-panel-active')
        : container.classList.remove('right-panel-active');
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (registerPassword.trim() !== registerPasswordConfirmation.trim())
      return Swal.fire('Error', 'Las contraseñas deben ser iguales', 'error');

    dispatch(startRegister(registerEmail, registerPassword, registerName));
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(startLogin(loginEmail, loginPassword));
  };

  return (
    <div className="wrapper">
      <div className="center-container" id="container">
        <div className="form-container sign-up-container">
          <form className="form-login" onSubmit={handleRegister}>
            <h2 className="h2">Create Account</h2>
            <input
              className="input"
              type="text"
              placeholder="Name"
              name="registerName"
              value={registerName}
              onChange={handleRegisterInputChange}
            />
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="registerEmail"
              value={registerEmail}
              onChange={handleRegisterInputChange}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="registerPassword"
              value={registerPassword}
              onChange={handleRegisterInputChange}
            />
            <input
              className="input"
              type="password"
              placeholder="Confirm your password"
              name="registerPasswordConfirmation"
              value={registerPasswordConfirmation}
              onChange={handleRegisterInputChange}
            />
            <button className="button">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="form-login" onSubmit={handleLogin}>
            <h2 className="h2">Sign in</h2>
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="loginEmail"
              value={loginEmail}
              onChange={handleLoginInputChange}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="loginPassword"
              value={loginPassword}
              onChange={handleLoginInputChange}
            />
            <a href="#" className="forgot-password">
              Forgot your password?
            </a>
            <button className="button">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h2 className="h2">Welcome Back!</h2>
              <p className="p">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="button ghost"
                id="signIn"
                onClick={() => toggleSignInState(false)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h2 className="h2">Hello, Friend!</h2>
              <p className="p">
                Enter your personal details and start journey with us
              </p>
              <button
                className="button ghost"
                id="signUp"
                onClick={() => toggleSignInState(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
