import React from 'react'
import './Search.css'
import Header from '../../components/Header/Header';
import Main from './components/Main';
import Footer from '../../components/Footer/Footer';

class Search extends React.Component {
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

export default Search;
