import "./App.css";
import Login from "./components/Login";
import Client from "./components/Clients";
import NavBar from "./components/Navbar";
import NewClient from "./components/NewClient";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = () => (
  <div>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/clientes">
          <Client />
        </Route>
        <Route path="/nuevoCliente">
          <NewClient />
        </Route>
      </Switch>
    </Router>
  </div>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
