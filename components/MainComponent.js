import React, { Component } from 'react';
import WellnessDirectory from './WellnessDirectoryComponent';
import { ARTICLES } from '../shared/articles.js';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: ARTICLES
        };
    }

    render() {
        return <WellnessDirectory articles={this.state.articles} />;
    }
}

export default Main;