import React, { Component } from 'react';
import { AppRegistry, View, ScrollView, StyleSheet, Text, TouchableHighlight, Modal, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
var poster = require('./Poster.js');
import PostInfo from './PostInfo.js';


const styles = StyleSheet.create({
    title: {
        color: '#fbffff',
        fontWeight: 'bold',
        fontSize: 30,
        justifyContent: 'center'
    },
    content: {
        color: 'black',
        fontSize: 20,
        backgroundColor: '#deecef',
    },
});


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
    constructor(props) {
        super(props);
        this.state = {
            results:[{
            key:1,
            title: 'null',
        }]};
        getAllPost(this)
    }

    render() {
        const renderedPosts =  this.state.results.map(b => {
            var color = "#4286f4"
            return (
                <View key={b.key}>
                    <Post color1="#4286f4" color2="#4286f4" text = {b.text}/>
                </View>
            )
        });
        return (
            <ScrollView>
                {renderedPosts}
                <Post color1="#4286f4" color2="#4286f4" text ={this.state.results[0].text}/>
            </ScrollView>
        )

    }
}2

function getAllPost(_this){
    data = {
        key:key,
        username:username,
    };
    poster.GetFeed()
        .then(function (result) {
            return result._bodyInit
        })
        .then(function (result) {
            //split strings here
            var res = result.split('');
            var starts = [];
            var ends = [];
            for(var i =2; i<res.length-1;i++){
                if(res[i]==='{'){
                    starts.push(i);
                }
                if(res[i]==='}'){
                    ends.push(i);
                }
            }
            var allJson = [];

            for(i = 0; i<ends.length;i++){
                //console.warn(result.substring(starts[i],ends[i]+1))
                allJson.push(JSON.parse(result.substring(starts[i],ends[i]+1)))
                allJson[i].colorA = allJson[i].colorA.toLowerCase();
                allJson[i].colorB = allJson[i].colorB.toLowerCase();
                allJson[i].key = i;
            }

            //console.warn(allJson[2].colorA)

            _this.setState({results:allJson})
        })
        .catch(function (err) {
            console.warn("I guess there was a post request error in profile.js in the getAllPost method "+err)
        })
}


// skip this line if using Create React Native App
//AppRegistry.registerComponent('GradientReactNative', () => FlexDimensionsBasics);