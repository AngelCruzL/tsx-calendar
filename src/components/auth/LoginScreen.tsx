import React from 'react';
import './login.css';

function LoginScreen() {
  const toggleSignInState = (signInForm = true) => {
    const container = document.getElementById('container');

    if (container)
      signInForm
        ? container.classList.add('right-panel-active')
        : container.classList.remove('right-panel-active');
  };

  return (
    <div className="wrapper">
      <div className="center-container" id="container">
        <div className="form-container sign-up-container">
          <form className="form-login">
            <h2 className="h2">Create Account</h2>
            <input className="input" type="text" placeholder="Name" />
            <input className="input" type="email" placeholder="Email" />
            <input className="input" type="password" placeholder="Password" />
            <input
              className="input"
              type="password"
              placeholder="Confirm your password"
            />
            <button className="button">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="form-login">
            <h2 className="h2">Sign in</h2>
            <input className="input" type="email" placeholder="Email" />
            <input className="input" type="password" placeholder="Password" />
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
