import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlayerList from './PlayerList';
import PlayerDetails from './PlayerDetails';
import CreatedPlayerForm from './CreatedPlayerForm'; 

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Bowl Players</h1>
        <Switch>
          <Route exact path="/">
            <PlayerList />
          </Route>
          <Route path="/players/:id">
            <PlayerDetails />
          </Route>
          <Route path="/create">
            <CreatedPlayerForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;