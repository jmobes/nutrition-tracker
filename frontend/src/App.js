import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>HOME PAGE!</h1>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
