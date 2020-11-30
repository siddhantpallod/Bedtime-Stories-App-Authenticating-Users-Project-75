import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStoryScreen from '../screens/ReadStoryScreen';
import WriteStoryScreen from '../screens/WriteStoryScreen';

export const AppTabNavigator = createBottomTabNavigator({
    WriteStory : {screen : WriteStoryScreen,
    navigationOptions : {
        tabBarIcon : <Image
        style = {{
            width : 30,
            height : 30
        }}
        source = {require('../assets/write.png')}
        />,
        tabBarLabel : 'WriteStory'
    }
    },
    ReadStory : {screen : ReadStoryScreen,
        navigationOptions : {
            tabBarIcon : <Image
            style = {{
                width : 30,
                height : 30
            }}
            source = {require('../assets/read.png')}
            />,
            tabBarLabel : 'ReadStory'
        }
    }
})