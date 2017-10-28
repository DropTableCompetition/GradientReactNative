import React from 'react';
import {Text, View,Button, StyleSheet } from 'react-native';
//import styles from './StyleSheet';
import LinearGradient from 'react-native-linear-gradient';
class AllPost extends React.Component {
    render() {
        return (
            <View>
                <LinearGradient colors={['#30ffa6', '#ffd31f']}>
                    <Text style={styles.buttonText}>
                        profile
                    </Text>
                </LinearGradient>
                <Text>but</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

module.exports = AllPost;