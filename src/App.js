import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Clubs from './components/Clubs/Clubs';
import Technologies from './components/Technologies/Technologies';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/clubs" component={Clubs} />
          <Route exact path="/technologies" component={Technologies} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
