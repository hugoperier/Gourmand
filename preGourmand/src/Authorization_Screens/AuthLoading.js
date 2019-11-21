import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    StatusBar
} from 'react-native';

export default class AuthLoading extends Component {
    render(){
        return(
            <View>
                <View>
                    <Text> Gourmand</Text>
                </View>
                <View>
                    <ActivityIndicator/>
                    <Text> 인증키를 확인하는 중 입니다. </Text>
                </View>
            </View>
        );
    }
}