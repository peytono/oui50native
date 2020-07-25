import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function WellnessDirectory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem 
                title={item.title}
                subtitle={item.author}
                onPress={() => props.onPress(item.id)}
                leftAvatar={{ source: require('./images/protectYourPeace.jpeg')}}
            />
        );
    };

    return (
        <FlatList
            data={props.articles}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default WellnessDirectory;