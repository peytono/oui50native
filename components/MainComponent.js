import React, { Component } from 'react';
import WellnessDirectory from './WellnessDirectoryComponent';
import ArticleInfo from './ArticleInfoComponent';
import { View } from 'react-native';
import { ARTICLES } from '../shared/articles.js';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: ARTICLES,
            selectedArticle: null
        };
    }

    onArticleSelect(articleId) {
        this.setState({selectedArticle: articleId})
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <WellnessDirectory 
                    articles={this.state.articles} 
                    onPress={articleId => this.onArticleSelect(articleId)} 
                />
                <ArticleInfo article={this.state.articles.filter(article => article.id === this.state.selectedArticle)[0]} />
            </View>
    )}
}

export default Main;