import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import Tdee from "./pages/Tdee";
import Diary from "./pages/Diary";
import Progress from "./pages/Progress";

const App = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/goals">
          <Goals />
        </Route>
        <Route path="/tdee-calculator">
          <Tdee />
        </Route>
        <Route path="/diary">
          <Diary />
        </Route>
        <Route path="/progress">
          <Progress />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
