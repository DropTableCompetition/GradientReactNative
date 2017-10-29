import React from 'react';
import {Text, View,Button, StyleSheet} from 'react-native';
//import styles from './StyleSheet';
import LinearGradient from 'react-native-linear-gradient';
import GeolocationExample from "./GeoLocation";
var geo = require('./GeoLocation.js');


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};


    }

    render() {
        return (
            <View>
                <LinearGradient colors={['#30ffa6', '#ffd31f']}>
                    <Text>profile</Text>
                    <GeolocationExample/>
                </LinearGradient>
            </View>
        );
    }
}

module.exports = Profile;