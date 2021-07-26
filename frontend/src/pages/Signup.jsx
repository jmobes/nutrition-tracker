import { useState } from "react";
import "./Signup.css";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e, id) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "username") {
      setUsername(e.target.value);
    } else {
      setPasswordConfirm(e.target.value);
    }
  };

  const resetInputs = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      resetInputs();
      return;
    }
    fetch("http://localhost:5000/api/users", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === "fail") {
          throw new Error(json.message);
        }
        console.log(json);
      })
      .catch((ex) => {
        if (ex.message.toLowerCase() === "failed to fetch") {
          setError("Connection error. Please try again.");
        } else if (
          ex.message.toLowerCase() ===
          `e11000 duplicate key error collection: nutrition-tracker.users index: email_1 dup key: { email: "${email}" }`
        ) {
          setError("Email already taken.");
        } else if (
          ex.message.toLowerCase() ===
          `e11000 duplicate key error collection: nutrition-tracker.users index: username_1 dup key: { username: "${username}" }`
        ) {
          setError("Username already taken.");
        } else {
          setError(ex.message);
        }
      });
    console.log("Form data was submitted");

    resetInputs();
  };

  return (
    <section className="signup">
      <h2 className="signup__title">signup</h2>
      <p className="signup__error">{error}</p>
      <form onSubmit={handleSubmit} className="signup__form">
        <div className="signup__email">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={email}
            type="email"
            id="email"
            required
          />
        </div>
        <div className="signup__username">
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            value={username}
            type="text"
            id="username"
            required
          />
        </div>
        <div className="signup__password">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={password}
            type="password"
            id="password"
            required
          />
        </div>
        <div className="signup__password">
          <label htmlFor="password">Confirm Password</label>
          <input
            onChange={handleChange}
            value={passwordConfirm}
            type="password"
            id="confirm"
            required
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
