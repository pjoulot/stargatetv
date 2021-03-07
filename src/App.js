import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  MenuLink
} from "./components/Menu.js";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <MenuLink to="/" value="Home"></MenuLink>
            </li>
            <li>
              <MenuLink to="/series" value="Series"></MenuLink>
            </li>
            <li>
              <MenuLink to="/movies" value="Movies"></MenuLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/series">
            <Series />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Series() {
  return <h2>Series</h2>;
}

function Movies() {
  return <h2>Movies</h2>;
}

export default App;
