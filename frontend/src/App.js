import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
