import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem, Tile } from 'react-native-elements';
import { ARTICLES } from '../shared/articles';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};

class WellnessDirectory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            articles: ARTICLES
        };
    }

    static navigationOptions = {
        title: 'Wellness Articles'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <Tile 
                    title={item.title}
                    caption={item.author}
                    featured
                    onPress={() => navigate('ArticleInfo', { articleId: item.id })}
                    imageSrc={{uri: baseUrl + item.image}}
                />
            );
        };

        return (
            <FlatList
                data={this.props.articles.articles}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(WellnessDirectory);