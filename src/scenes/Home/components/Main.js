import React, {Component} from 'react';
import './Main.css';
import Latest from './Latest';
import ExternalLink from './ExternalLink';
import Upcoming from './Upcoming';
import CoreProject from './CoreProject';
import Supporter from './Supporter';

class Main extends Component {
    render() {
        return (
            <div>
                <Latest />
                <div className="container">
                    <div className="row">
                        <ExternalLink />
                        <ExternalLink />
                    </div>
                </div>
                <Upcoming />
                <CoreProject />
                <Supporter />
            </div>
        );
    }
}

export default Main;
