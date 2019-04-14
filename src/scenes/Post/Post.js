import React from 'react';
import './Post.css';
import Header from '../../components/Header/Header';
import Main from './components/Main';
import Footer from '../../components/Footer/Footer';

class Post extends React.Component {
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

export default Post;
