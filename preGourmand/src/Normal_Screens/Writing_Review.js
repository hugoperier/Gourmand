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
            <View style={styles_WritingReview.write_review_container}>
                <View style={styles_WritingReview.section_header_container}>
                    <Text style={styles_WritingReview.section_header}>Grade</Text>
                </View>
                <View style = {{alignItems:'center'}}>
                    <View style={{ flexDirection: 'row' , alignItems:'center' ,}}>
                        <TextInput style = {{fontSize :32}} placeholder="10" keyboardType={'numeric'}/>
                        <Text style = {{fontSize :30}}> / 10</Text>
                    </View>
                </View>
                <View style={styles_WritingReview.section_header_container}>
                    <Text style={styles_WritingReview.section_header}>Review</Text>
                </View>
                <TextInput 
                    style = {{}}
                    placeholder="Please write your own review!" />
                <TouchableOpacity style = {styles_WritingReview.txt_btn}>
                    <Text style = {styles_WritingReview.txt_btn_Text}>
                        Store Review
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles_WritingReview = StyleSheet.create({
    write_review_container: {
        margin: 10
    },
    section_header_container: {
        borderLeftWidth: 2,
        borderColor: '#ff2424',
        marginLeft: 5,
        marginTop: 10,
    },
    section_header: {
        margin: 5,
        fontSize: 20,
    },
    txt_btn: {
        marginTop: 10,
        alignItems:'center'
    },
    txt_btn_Text: {
        fontSize: 20,
        fontStyle: "normal"
    }
})