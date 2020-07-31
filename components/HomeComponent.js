import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import Loading from './LoadingComponent';
import { ARTICLES } from '../shared/articles';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};

function RenderItem(props) {
    const {item} = props;

    if (props.isLoading) {
        return <Loading />;
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
    if (item) {
        return ( 
                <Card
                    featuredTitle={item.title}
                    image={{uri: baseUrl + item.image}}
                >
                    <Text
                        style={{margin: 10}}>
                        {item.author}
                    </Text>
                </Card>
        );
    }
    return <View />;

}

class Home extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            articles: ARTICLES
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        const { navigate } = this.props.navigation;
        console.log(navigate);
        
        return (
            <ScrollView>
                <Card
                    title='Our Mission'>
                    <Text 
                        style={{margin:10}}>
                        Media loves to resprent the youngsters. If you are an extrodinairy 50 year old look for inspiration, you've come to the right place!
                    </Text>
                </Card>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                    <Text style={{fontSize: 16, marginTop: 10, fontWeight: "bold"}}>Featured Article</Text>
                </View>
                <TouchableOpacity
                    onPress={ () => navigate('ArticleInfo')}
                    >
                    <RenderItem 
                        item={this.props.articles.articles.filter(article => article.featured)[0]}
                        isLoading={this.props.articles.isLoading}
                        errMess={this.props.articles.errMess}    
                    />
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);