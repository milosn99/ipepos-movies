import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./Login";

function Index() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/movies">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}

export default Index;
