import React, { Component } from 'react';
import { AppRegistry, View, ScrollView, Text, TouchableHighlight, Modal, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PostInfo from './PostInfo.js';

class Post extends Component{
    constructor(props) {
        super(props);
        this.state = {modalVisible: false, user: "noUser", text: "no text", color: "figure this out"}
    }

     onPressButton(){
        console.warn("this worked");
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render(){
        return(
            <View>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {this.setModalVisible(!this.state.modalVisible)}}
                >
                    <View>
                    <Button
                        style = {{}}
                        title={'close info i guess? il work on this part later'}
                        color={"#00f355"}
                        onPress={()=>{
                            this.setModalVisible(!this.state.modalVisible)
                        }}/>
                        <PostInfo color1={this.props.color1} color2={this.props.color2}/>
                    </View>
                </Modal>
            <TouchableHighlight onPress={()=>{
                this.setModalVisible()
            }}>
                <LinearGradient style={{width: 600, height: 234}} colors={[this.props.color1, this.props.color2]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}>
                    <Text style={{fontSize: 18, textAlign: 'left', margin: 100,width:400}}>
                        {this.props.text}
                    </Text>
                </LinearGradient>
            </TouchableHighlight>
            </View>
        )
    }
}


export default class FlexDimensionsBasics extends Component {
    render() {
        return (
            <ScrollView>
                <Post color1='#f4c242' color2='#ff001d' text = "so this is a text1"/>
                <Post color1='#ff001d' color2='#340fdb' text = "so this is a text2"/>
                <Post color1='#340fdb' color2='#7c7352' text = "so this is a text3"/>
                <Post color1='#7c7352' color2='#7aa389' text = "so this is a text4"/>
            </ScrollView>
        );
    }
}

// skip this line if using Create React Native App
//AppRegistry.registerComponent('GradientReactNative', () => FlexDimensionsBasics);