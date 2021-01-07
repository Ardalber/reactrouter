import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Post from "./pages/Post";

export default class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li><NavLink exact to="/">Accueil</NavLink></li>
          <li><NavLink to="/mes-articles-de-la-mort">Post</NavLink></li>
          <li><NavLink to="/me-contacter">Contact</NavLink></li>
        </ul>

        <Route exact path="/" component={Home} />
        {/* <Route path="/mes-articles-de-la-mort" component={Blog} /> */}

        <Route path="/mes-articles-de-la-mort/:bachibouzouk" component={Post} />

        <Route path="/me-contacter" component={Contact} />
      </Router>
    )
  }
}
