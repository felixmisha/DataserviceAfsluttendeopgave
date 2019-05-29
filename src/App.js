import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateProduct from "./components/opretProdukt";
import EditProduct from "./components/retProdukt";
import ProductList from "./components/visProdukter";
import DeleteProduct from "./components/sletProdukt"

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://google.com" target="_blank" rel="noopener noreferrer">
              <img src={logo} width="30" height="30" alt="logo"/>
            </a>
            <Link to="/" className="navbar-brand">Afsluttende opgave dataservice</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Produkter</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Opret Produkt</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={ProductList} />
          <Route path="/edit/:id" component={EditProduct} />
          <Route path="/create" component={CreateProduct} />
          <Route path="/delete" component={DeleteProduct} />
        </div>
      </Router>
    );
  }
}

export default App;