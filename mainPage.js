import React, { Component } from 'react';
import { AppRegistry, View, ScrollView, Text } from 'react-native';


class Post extends Component{
    constructor(props) {
        super(props);
        this.state = {user: "noUser", text: "no text", color: "figure this out"}
    }

    render(){
        return(
            <View style={{width: 600, height: 234}}>
                <View style={{flex: 1, backgroundColor: this.props.backgroundColor}}>
                    <Text style={{fontSize: 18, textAlign: 'left', margin: 100,width:400}}>this is a test</Text>
                    {/*fontSize: 18, margin: 100, width: 300*/}
                </View>
            </View>
        )
    }
}


export default class FlexDimensionsBasics extends Component {
    render() {
        return (
            <ScrollView>
                <Post backgroundColor='powderblue'/>
                <Post backgroundColor='steelblue'/>
                <Post backgroundColor='skyblue'/>
            </ScrollView>
        );
    }
}

// skip this line if using Create React Native App
//AppRegistry.registerComponent('GradientReactNative', () => FlexDimensionsBasics);