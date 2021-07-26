import { useState } from "react";
import "./Signup.css";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleChange = (e, id) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    } else {
      setPasswordConfirm(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/users/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((ex) => console.error(ex));
    console.log("Form data was submitted");
  };

  return (
    <section className="signup">
      <h2 className="signup__title">signup</h2>
      <form onSubmit={handleSubmit} className="signup__form">
        <div className="signup__email">
          <label htmlFor="email">Email</label>
          <input onChange={handleChange} value={email} type="text" id="email" />
        </div>
        <div className="signup__password">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={password}
            type="password"
            id="password"
          />
        </div>
        <div className="signup__password">
          <label htmlFor="password">Confirm Password</label>
          <input
            onChange={handleChange}
            value={passwordConfirm}
            type="password"
            id="confirm"
          />
        </div>
        <button type="submit" className="signup__submit">
          Create Account
        </button>
      </form>
    </section>
  );
};

export default Signup;
