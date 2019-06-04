import React from "react";
import { Store } from "./Store";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './HomePage';
import FavesPage from './FavesPage';

export default function App(): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <Router>
        <header className="header">
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode</p>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/faves'>
              Favorite(s): {state.favorites.length}
            </Link>
          </div>
        </header>

        <Route exact path="/" component={HomePage} />
        <Route path="/faves" component={FavesPage} />
      </Router>
    </React.Fragment>
  );
}
