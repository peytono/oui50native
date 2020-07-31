import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem, Tile } from 'react-native-elements';
import Loading from './LoadingComponent';
import { ARTICLES } from '../shared/articles';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};

class Directory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            articles: ARTICLES
        };
    }

    static navigationOptions = {
        title: 'Articles'
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

        if (this.props.articles.isLoading) {
            return <Loading />;
        }
        if (this.props.articles.errMess) {
            return (
                <View>
                    <Text>{this.props.articles.errMess}</Text>
                </View>
            );
        }
        return (
            <FlatList
                data={this.props.articles.articles}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Directory);