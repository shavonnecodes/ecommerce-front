import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Homepage  } from './Homepage';
import { ProductsPage } from './ProductsPage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(fab);

export const App = () => (
   <>
  <Router>
    <Switch>
      <Route path="/products" component={ ProductsPage } />
      <Route path="/" component={ Homepage } />
    </Switch>
  </Router>
   </>
  );


