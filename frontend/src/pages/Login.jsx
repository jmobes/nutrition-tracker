import "./Login.css";

const Login = () => {
  return (
    <section className="login">
      <form className="login__form">
        <div className="login__email">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div className="login__password">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
        </div>
        <button className="login__submit">Log In</button>
      </form>
    </section>
  );
};

export default Login;
