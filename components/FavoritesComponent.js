import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import Swipeout from 'react-native-swipeout';
import { deleteFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        articles: state.articles,
        favorites: state.favorites
    };
};

const mapDispatchToProps = { deleteFavorite: articleId => (deleteFavorite(articleId))};

class Favorites extends Component {

    static navigationOptions = {
        title: 'My Favorites'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderFavoriteItem = ({item}) => {
            const rightButton = [
                {
                    text: 'Delete',
                    type: 'delete',
                    onPress: () => this.props.deleteFavorite(item.id)
                }
            ];

            return (
                <Swipeout right={rightButton} autoClose={true}>
                    <ListItem 
                        title={item.title}
                        subtitle={item.description}
                        leftAvatar={{source: {uri: baseUrl + item.image}}}
                        onPress={() => navigate('ArticleInfo', {articleId: item.id})}
                    />
                </Swipeout>
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
                data={this.props.articles.articles.filter(
                    article => this.props.favorites.includes(article.id)
                )}
                renderItem={renderFavoriteItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);