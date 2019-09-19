import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';

import Boxes from './components/Boxes';
import Main from './components/Main';
import Second from './components/Second';
import Navbar from './components/Navbar';

import './styling/style.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route path="/" component={Boxes} exact />
            <Route path="/main" component={Main}  />
            <Route path="/second" component={Second}  />
          </Switch>
      </ BrowserRouter>
    </div>
  );
}

export default App;
