import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style/oneStyle.css';
import './style/twoStyle.css';
import {useState} from 'react';
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

// Admin
import AdminPage from './pages/AdminPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const isLogin = useSelector(state => state.auth.isLogged)
  // const [number, setNumber] = useState(JSON.parse(localStorage.getItem("items")).length)
  const [number, setNumber] = useState(1);

  return (
    <Router>

      <Switch>
        <Route path="/admin">
        </Route>
        <Route path="/dashboard">
        </Route>
        <Route path="/">
          <Navigation number={number} setNumber={setNumber} />
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
          <DetailCosmeticsPage number={number} setNumber={setNumber}/>
        </Route>
        <Route exact path="/fashion">
          <CatalogFashionPage/>
        </Route>
        <Route path="/fashion/:id">
          <DetailFashionPage number={number} setNumber={setNumber}/>
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
