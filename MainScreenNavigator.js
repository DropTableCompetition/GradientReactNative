import React, { Component } from 'react';
import {AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,ScrollView} from 'react-native';
import { TabNavigator } from "react-navigation";
import mainPage from './mainPage.js';
import Profile from './Profile.js';
import allPost from './AllPost.js';
//import socket from './utility/socketManager.js'
var poster = require('./Poster.js');


const MainScreenNavigator = TabNavigator({
    main: { screen: mainPage },
    All: { screen: allPost },
    Profile: { screen: Profile},
},  {tabBarOptions: {
    activeTintColor: '#fefdff',
    activeBackgroundColor: '#8e46c9',
    labelStyle: {
        fontSize: 12,
    },
    style: {
        backgroundColor: '#ae59f3',

    },
}});

MainScreenNavigator.navigationOptions = {
    title: 'My Chats',
};

module.exports = MainScreenNavigator;

// skip this line if using Create React Native App
AppRegistry.registerComponent('GradientReactNative', () => MainScreenNavigator);