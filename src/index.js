import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Home from './scenes/Home/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render((
    <Home />
), document.getElementById('root'));
// <Router>
//     <Home />
// </Router>
