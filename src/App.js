import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style/oneStyle.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from './components/templates/Navigation';
import Footer from './components/templates/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import CatalogCosmeticPage from './pages/CatalogCosmeticsPage';
import DetailCosmeticsPage from './pages/DetailCosmeticsPage';

function App() {

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
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
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
