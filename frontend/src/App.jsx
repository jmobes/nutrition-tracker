import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [headerStyle, setHeaderStyle] = useState("");

  return (
    <Router>
      <Header styles={headerStyle} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login setHeaderStyle={setHeaderStyle} />
        </Route>
        <Navigation />
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
