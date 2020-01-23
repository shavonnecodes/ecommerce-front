import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ProductsPage } from './ProductsPage';

export const App = () => (
   <>
  <Router>
    <Switch>
      <Route path="/products" component={ ProductsPage } />
    </Switch>
  </Router>
   </>
  );


