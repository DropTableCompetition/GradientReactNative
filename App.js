import React, { Component } from 'react';
import {AppRegistry, Text, Image, View,TextInput, ListView,Button,StatusBar} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainNav from './MainScreenNavigator.js';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {user: 'marc',password:'nohash',sessionKey:'not Logged in'};
    }

    static navigationOptions = {
        title: 'Welcome to TinySpace :D',
    };

    Switch2All=function(user,pass) {
        navigate('Chat')
    }
    
    render() {
        return (
            <View style={{padding: 10}}>
                <Text>Welcome to TinySpace!</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="UserName"
                    defaultValue={"marc"}
                    onChangeText={(text) => (this.state.user=text)}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="password"
                    defaultValue={"nohash"}
                    onChangeText={(text) => (this.state.password = text)}
                />
                <Text>{(this.state.sessionKey).toString()}</Text>

            </View>
        );
    }
}

const SimpleApp = StackNavigator({
        Home: { screen: LoginPage },
        Main: { screen: MainNav },
    },
    { headerMode: 'none' }

);

module.exports = LoginPage;

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => SimpleApp);