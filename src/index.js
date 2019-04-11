import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Home from './scenes/Home/Home';
import Post from './scenes/Post/Post';
import Search from './scenes/Search/Search';
import FAQ from './scenes/FAQ/FAQ';
import AboutUs from './scenes/AboutUs/AboutUs';
import Dashboard from './scenes/Dashboard/Dashboard';


library.add(fab, faSearch);

ReactDOM.render((
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/post" component={Post} />
        <Route path="/search" component={Search} />
        <Route path="/faq" component={FAQ} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/dashboard" component={Dashboard} />
    </Router>
), document.getElementById('root'));
