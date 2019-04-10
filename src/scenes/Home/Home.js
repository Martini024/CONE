import React, {Component} from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Main from './components/Main';
import Footer from '../../components/Footer/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </div>
    );
    }
}

export default Home;
