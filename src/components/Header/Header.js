import React, {Component} from 'react';
import './Header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Headroom from 'react-headroom';

class Header extends Component {
    render() {
        return (
            <Headroom>
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <a>
                                    <img className="logo" alt="" src={require('./logo.png')} width="1000px" height="400px"></img>
                                </a>
                            </div>

                            <div className="col-8">
                                <ul className="nav justify-content-around">
                                    <li className="nav-item">
                                        About Us
                                    </li>
                                    <li className="nav-item">
                                        Events
                                    </li>
                                    <li className="nav-item">
                                        Projects
                                    </li>
                                    <li className="nav-item">
                                        Get Involved
                                    </li>
                                    <li className="nav-item">
                                        <a>
                                            <FontAwesomeIcon icon="search"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-2">
                                <ul className="nav justify-content-end">
                                    <li className="nav-item">
                                        <a>
                                            <FontAwesomeIcon icon={["fab", "facebook"]}/>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a>
                                            <FontAwesomeIcon icon={["fab", "twitter"]}/>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a>
                                            <FontAwesomeIcon icon={["fab", "youtube"]}/>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a>
                                            <FontAwesomeIcon icon={["fab", "instagram"]}/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </Headroom>
        );
    }
}

export default Header;
