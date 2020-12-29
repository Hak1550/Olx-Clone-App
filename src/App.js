import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Olxfront from './Components/Olxfront'
import SellForm from './Components/SellForm'
import Recomendation from './Components/Recomendation'




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sellform">
          <Header />
          <SellForm />
          <Footer />
        </Route>

        <Route path="/">
          <Header />
          <Navbar />
          <Olxfront />
          <Recomendation />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
