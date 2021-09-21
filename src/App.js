import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Layout } from'./components/Layout/Layout';
import  Home  from './pages/Home/HomePage';
import  ShowSaleOrder  from './pages/SaleOrder/ShowSaleOrderPage';
import  Action_SaleOrder  from './pages/SaleOrder/Action_SaleOrderPage';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Filejs } from './components/Layout/Filejs';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Router basename={baseUrl}>
        <Layout>
          <Switch>
            <Route exact path='/' component={() => <Home>Trang Chủ</Home>} />
            <Route exact path='/sale-order/:id' component={ShowSaleOrder} />
            <Route exact path='/sale-order/:id/edit' component={Action_SaleOrder} />
            <Route exact component={Home}></Route>
          </Switch>
        </Layout>
        <Filejs></Filejs>
      </Router>
    );
  }
}
