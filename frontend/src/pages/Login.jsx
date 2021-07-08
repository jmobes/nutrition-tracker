import { useState } from "react";
import "./Login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, id) => {
    e.target.id === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data was submitted");
  };

  return (
    <section className="login">
      <form onSubmit={handleSubmit} className="login__form">
        <div className="login__email">
          <label htmlFor="email">Email</label>
          <input onChange={handleChange} value={email} type="text" id="email" />
        </div>
        <div className="login__password">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={password}
            type="text"
            id="password"
          />
        </div>
        <button type="submit" className="login__submit">
          Log In
        </button>
      </form>
      <div className="login__extras">
        <p className="forgot__password">Forgot password?</p>
        <p className="login__signup">
          Don't have an account? <span>Sign up now</span>
        </p>
      </div>
    </section>
  );
};

export default Login;
