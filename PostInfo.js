import React, { Component } from 'react';
import {Text, View,Button, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class PostInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {user: "noUser", text: "no text", color: "figure this out"}
    }

    onPressButton(){
        console.warn("this worked");
    }


    render(){
        return(
            <View>
                <LinearGradient style={{width: 600, height: 900}} colors={[this.props.color1, this.props.color2]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}>
                    <Text style={{fontSize: 18, textAlign: 'left', margin: 100,width:400}}>
                        so ima put some info here. probably gonna fetch this from the server
                    </Text>
                </LinearGradient>
            </View>
        )
    }
}

module.exports = PostInfo;