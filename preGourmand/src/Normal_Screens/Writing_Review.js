import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class ReviewWrite extends Component {
    render() {
        return (
            <View>
                <View style = {{flexDirection : 'row'}}>
                    <TextInput placeholder="10" />
                    <Text> / 10</Text>
                </View>
                <TextInput placeholder = "Please write your own review!"/>
                <TouchableOpacity>
                    <Text>
                        Store Review!
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles_WritingReview = StyleSheet.create({

})