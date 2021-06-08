import React from 'react';
import { Container } from '@material-ui/core';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Pokedex from './components/Pokedex/Pokedex';
import Pokemon from './components/Pokemon/Pokemon';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
    <Router>
      <Container maxWidth='xl'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={() => <Redirect to='/pokedex' />} />
          <Route exact path='/pokedex' component={Pokedex} />
          <Route exact path='/pokemon/:pokemonId' component={Pokemon} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
