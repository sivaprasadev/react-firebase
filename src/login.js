import React from "react";
import "./App.css";
const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <div>
      <label>Username</label>
      <input
        type="text"
        required
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>{emailError}</p>
      <label>Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>{passwordError}</p>
      <div>
        {hasAccount ? (
          <>
            <button onClick={handleLogin}>Sign in</button>
            <p>
              Don't have an account?
              <span
                onClick={() => setHasAccount(!hasAccount)}
                className="sign-in-out"
              >
                Sign Up
              </span>
            </p>
          </>
        ) : (
          <>
            <button onClick={handleSignUp}>SignUp</button>
            <p>
              Have an account ?
              <span
                onClick={() => setHasAccount(!hasAccount)}
                className="sign-in-out"
              >
                Signin
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
