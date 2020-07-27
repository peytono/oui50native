import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ARTICLES } from '../shared/articles';

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
                <ListItem 
                    title={item.title}
                    subtitle={item.author}
                    onPress={() => navigate('ArticleInfo', { articleId: item.id })}
                    leftAvatar={{ source: require('./images/protectYourPeace.jpeg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.articles}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default WellnessDirectory;