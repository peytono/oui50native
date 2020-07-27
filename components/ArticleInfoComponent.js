import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { ARTICLES } from '../shared/articles';

function RenderArticle({article}) {
    if (article) {
        return (
            <ScrollView>
                <Card
                    featuredTitle={article.title}
                    image={require('./images/theJump.jpg')}
                    featuredSubtitle={article.author}>
                    
                    <Text style={{margin: 10}}>
                        {article.contents}
                    </Text>
                </Card>
            </ScrollView>
        );
    }
    return <ScrollView />;
}


class ArticleInfo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            articles: ARTICLES
        };
    }

    static navigationOptions = {
        title: 'Article Page'
    };
    
    render() {
        const articleId = this.props.navigation.getParam('articleId');
        const article = this.state.articles.filter(article => article.id === articleId)[0];
        return (
            <ScrollView>
                <RenderArticle article={article} />
            </ScrollView>
        );
    }
}

export default ArticleInfo;