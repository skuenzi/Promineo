const LoginForm = () => {
    
  return (
    <div className="login-form">
      <h3 className="login-title">Log In</h3>
      <input type="text" placeholder="email" name="email" className="login-input email"></input>
      <input type="text" placeholder="password" name="password" className="login-input password"></input>
      <button className="submit-btn">Submit</button>
    </div>
  );
};

export default LoginForm;
