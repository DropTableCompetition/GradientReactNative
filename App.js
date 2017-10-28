import React, { Component } from 'react';
import {AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,ScrollView} from 'react-native';
import { TabNavigator } from "react-navigation";
import mainPage from './mainPage.js';
import PostPage from './PostPage.js';
import Profile from './Profile.js';
//import socket from './utility/socketManager.js'
var poster = require('./Poster.js');


const MainScreenNavigator = TabNavigator({
    main: { screen: mainPage },
    Profile: { screen: Profile },
    PostPage: { screen: PostPage},
},  {tabBarOptions: {
    activeTintColor: '#fefdff',
    activeBackgroundColor: '#8e46c9',
    labelStyle: {
        fontSize: 12,
    },
    style: {
        height : 0,
        opacity: 0,
    },
}});


MainScreenNavigator.navigationOptions = {
    title: 'My Chats',
};

module.exports = MainScreenNavigator;

// skip this line if using Create React Native App
AppRegistry.registerComponent('GradientReactNative', () => MainScreenNavigator);

// skip this line if using Create React Native App
AppRegistry.registerComponent('GradientReactNative', () => FlexDimensionsBasics);