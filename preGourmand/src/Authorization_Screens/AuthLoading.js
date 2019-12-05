import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    StatusBar,
    Image
} from 'react-native';

export default class AuthLoading extends Component {
    render(){
        return(
            <View style = {styles_AuthL.Container}>
                <Image
                    source = {require('D:\\preGourmand\\src\\image\\logo.png')}/>
                <View>
                    <ActivityIndicator style = {{marginBottom: 30}}/>
                    <Text style = {{fontSize : 20}}> 인증키를 확인하는 중 입니다. </Text>
                </View>
            </View>
        );
    }
}
const styles_AuthL = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});