import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
const config = require("dotenv").config();

function App() {
  console.log(config);

  return (
    <Router>
      <div>
        <Nav>
          <Link to="/">Books</Link>
          <Link to="/search">Search</Link>
          <Link to="/books">Detail</Link>
        </Nav>
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path ="/search/:searchTerm">
            <Search />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
