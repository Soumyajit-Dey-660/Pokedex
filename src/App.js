import React from 'react';
import { Container } from '@material-ui/core';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';


const App = () => {
  return (
    <Router>
      <Container maxWidth='xl'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={() => <Redirect to='/pokedex' />} />
          <Route exact path='/pokedex' component={Home} />
          <Route exact path='/pokemon/:pokemonId' component={PokemonDetails} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
