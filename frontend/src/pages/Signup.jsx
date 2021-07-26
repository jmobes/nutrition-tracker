import "./Signup.css";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, id) => {
    e.target.id === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
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
        <button type="submit" className="signup__submit">
          Log In
        </button>
      </form>
    </section>
  );
};

export default Signup;
