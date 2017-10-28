import React, { Component } from 'react';
import { AppRegistry, View, ScrollView, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Post extends Component{
    constructor(props) {
        super(props);
        this.state = {user: "noUser", text: "no text", color: "figure this out"}
    }

    render(){
        return(
                <LinearGradient style={{width: 600, height: 234}} colors={[this.props.color1, this.props.color2]}>
                    <Text style={{fontSize: 18, textAlign: 'left', margin: 100,width:400}}>
                        this is a test
                    </Text>
                </LinearGradient>

        )
    }
}


export default class FlexDimensionsBasics extends Component {
    render() {
        return (
            <ScrollView>
                <Post color1='#4c669f' color2='#ff001d'/>
                <Post color1='#ff001d' color2='#4c669f'/>
                <Post color1='#4c669f' color2='#ff001d'/>
            </ScrollView>
        );
    }
}

// skip this line if using Create React Native App
//AppRegistry.registerComponent('GradientReactNative', () => FlexDimensionsBasics);