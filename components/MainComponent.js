import React, { Component } from 'react';
import WellnessDirectory from './WellnessDirectoryComponent';
import ArticleInfo from './ArticleInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const WellnessDirectoryNavigator = createStackNavigator(
    {
        WellnessDirectory: { screen: WellnessDirectory },
        ArticleInfo: { screen: ArticleInfo }
    },
    {
        initialRouteName: 'WellnessDirectory',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#10DDF6'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

class Main extends Component {
    render() {
        return (
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <WellnessDirectoryNavigator />
            </View>
        );
    }
}

export default Main;