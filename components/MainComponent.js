import React, { Component } from 'react';
import Home from './HomeComponent';
import WellnessDirectory from './WellnessDirectoryComponent';
import ArticleInfo from './ArticleInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const WellnessDirectoryNavigator = createStackNavigator(
    {
        WellnessDirectory: { screen: WellnessDirectory },
        ArticleInfo: { screen: ArticleInfo }
    },
    {
        initialRouteName: 'WellnessDirectory',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#2B547E'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#2B547E'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: WellnessDirectoryNavigator }
    },
    {
        drawerBackgroundColor: '#C48189',
        contentOptions: {
            activeTintColor: '#2B547E',
            inactiveTintColor: '#696969'
        }
    }
);

class Main extends Component {
    render() {
        return (
            <View style={{
                flex: 1, 
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MainNavigator />
            </View>
        );
    }
}

export default Main;