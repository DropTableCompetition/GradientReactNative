import React from 'react';
import {Text, View,Button, StyleSheet} from 'react-native';
//import styles from './StyleSheet';
import LinearGradient from 'react-native-linear-gradient';

class Profile extends React.Component {
    render() {
        return (
            <View>
                <LinearGradient colors={['#30ffa6', '#ffd31f']}>
                    <Text>
                        profile
                    </Text>
                </LinearGradient>
                <Text>but</Text>
            </View>
        );
    }
}



module.exports = Profile;