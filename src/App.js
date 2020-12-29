import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Olxfront from './Components/Olxfront'
import SellForm from './Components/SellForm'
import Recomendation from './Components/Recomendation'
import ActualProduct from './Components/ActualProduct'




function App(props) {
  return (

<Router>
      <Switch>
        <Route path="/actualproduct">
          <Header />
          <ActualProduct />
          <Footer />
        </Route>
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
