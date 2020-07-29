import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { ARTICLES } from '../shared/articles';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};

function RenderArticle(props) {

    const {article} = props;

    if (article) {
        return (
            <ScrollView>
                <Card
                    featuredTitle={article.title}
                    image={{uri: baseUrl + article.image}}
                    featuredSubtitle={article.author}>
                    
                    <Text style={{margin: 10}}>
                        {article.contents}
                    </Text>
                    <Icon
                        name={props.favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#C48189' 
                        raised
                        reverse
                        onPress={() => props.favorite ? 
                            console.log('Already set as a favorite') : props.markFavorite()}
                    />
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
            articles: ARTICLES,
            favorite: false
        };
    }

    markFavorite() {
        this.setState({favorite: true});
    }

    static navigationOptions = {
        title: 'Article Page'
    };
    
    render() {
        const articleId = this.props.navigation.getParam('articleId');
        const article = this.props.articles.articles.filter(article => article.id === articleId)[0];
        return (
            <ScrollView>
                <RenderArticle article={article}
                    favorite={this.state.favorite}
                    markFavorite={() => this.markFavorite()}
                />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(ArticleInfo);