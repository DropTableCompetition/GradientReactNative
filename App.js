import React, { Component } from 'react';
import {AppRegistry, Text, Image, View,TextInput, ListView,Button,StatusBar} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainNav from './MainScreenNavigator.js';
var poster = require('./Poster.js');

url = 'www.programminginitiative.com'
var password;
port ='3000';
key = "no key";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {user: 'Test',password:'123',sessionKey:'not Logged in'};
    }

    static navigationOptions = {
        title: 'Welcome to Gradient',
    };

    Switch2All=function(user,pass) {
        navigate('Chat')
    }

    render() {
        //const {navigate} = this.props.navigate;
        return (
            <View style={{padding: 10}}>
                <Text>Welcome to Gradient</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="UserName"
                    defaultValue={"Test"}
                    onChangeText={(text) => (this.state.user=text)}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="password"
                    defaultValue={"123"}
                    onChangeText={(text) => (this.state.password = text)}
                />
                <Button title={"login"}
                        color={"#ae59f3"}
                        onPress={()=>{
                            const {navigate} = this.props.navigation;
                            //navigate('Main')
                            /*
                            poster.login(this.state.user,this.state.password, 'true')
                                .then(function(result){
                                    console.warn(result.text());
                                })
                                */
                            console.warn("button pressed")
                            console.log("fijewfijewfijewf");
                            poster.Test2()
                                .then(function(result){
                                    console.warn(result._bodyInit);
                                    console.log(result);
                                })
                            /*
                            var _this = this;
                            logged = "thing";
                            poster.login(this.state.user,this.state.password,'true')
                                .then(function (result) {
                                    logged = result._bodyInit;
                                    key = logged;
                                    _this.setState({user:_this.state.user,password:_this.state.password,sessionKey:logged})
                                    return logged
                                }).then(function (result) {
                                if(result != "bad Login") {
                                    username =_this.state.user
                                    start(navigate)
                                }
                            });
                            */
                        }
                        }/>
                <Text>{(this.state.sessionKey).toString()}</Text>

            </View>
        );
    }
}

function start(navigate){
    poster.AllPage(key)
        .then(function (result) {
            return result._bodyInit
        })
        .then(function (result) {
            return JSON.parse(result)
        })
        .then(function(result){
            posts = result
        })
        .then(function () {
            navigate('Main')
        })
}

const SimpleApp = StackNavigator({
    Home: { screen: LoginPage },
    Main: { screen: MainNav },
    },
    { headerMode: 'none' }
);

module.exports = SimpleApp;

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => SimpleApp);