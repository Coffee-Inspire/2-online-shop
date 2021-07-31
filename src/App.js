import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style/oneStyle.css';
import './style/twoStyle.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {useSelector } from 'react-redux';

import Navigation from './components/templates/Navigation';
import Footer from './components/templates/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import CatalogCosmeticPage from './pages/CatalogCosmeticsPage';
import DetailCosmeticsPage from './pages/DetailCosmeticsPage';
import CatalogFashionPage from './pages/CatalogFashionPage';
import DetailFashionPage from './pages/DetailFashionPage';
import PageNotFound from './pages/PageNotFound';

// Admin
import AdminPage from './pages/AdminPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const isLogin = useSelector(state => state.auth.isLogged)

  return (
    <Router>

      <Switch>
        <Route path="/admin">
        </Route>
        <Route path="/dashboard">
        </Route>
        <Route path="/">
          <Navigation/>
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/admin">
            <AdminPage />
          </Route>
        <Route path="/dashboard">
          {!isLogin && <Redirect to="/admin" />}
          <DashboardPage />
        </Route>
        <Route path="/about">
          <AboutUsPage/>
        </Route>
        <Route exact path="/cosmetic">
          <CatalogCosmeticPage/>
        </Route>
        <Route path="/cosmetic/:id">
          <DetailCosmeticsPage/>
        </Route>
        <Route exact path="/fashion">
          <CatalogFashionPage/>
        </Route>
        <Route path="/fashion/:id">
          <DetailFashionPage/>
        </Route>
        <Route>
          <PageNotFound/>
        </Route>
      </Switch>

      <Switch>
        <Route path="/admin">
        </Route>
        <Route path="/dashboard">
        </Route>
        <Route path="/">
          <Footer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
