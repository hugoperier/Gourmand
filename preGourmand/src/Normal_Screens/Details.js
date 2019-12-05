import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import MenuListview from './MenuListview';
import ReviewListview from './ReviewListview';

export default class Details extends Component {

    getMenus() {
        return [
            {
                key: 1, menu_name: '1 Chicken',
                menu_price: '17,000',
                image_url: ''
            },
            {
                key: 2, menu_name: '2 Chicken',
                menu_price: '17,000',
                image_url: ''
            },
            {
                key: 3, menu_name: '3 Chicken',
                menu_price: '17,000',
                image_url: ''
            },
            {
                key: 4, menu_name: '4 Chicken',
                menu_price: '17,000',
                image_url: ''
            },
            {
                key: 5, menu_name: '5 Chicken',
                menu_price: '17,000',
                image_url: ''
            },
        ]
    }

    getReviews() {
        return [
            {
                key: 1, user_name: 'user_1',
                review_grade: '9.8 / 10',
                review_content: '맛있네요.....'
            },
            {
                key: 2, user_name: 'user_2',
                review_grade: '9.8 / 10',
                review_content: '맛있네요.....'
            },
            {
                key: 3, user_name: 'user_3',
                review_grade: '9.8 / 10',
                review_content: '맛있네요.....'
            },
            {
                key: 4, user_name: 'user_4',
                review_grade: '9.8 / 10',
                review_content: '맛있네요.....'
            },
            {
                key: 5, user_name: 'user_5',
                review_grade: '9.8 / 10',
                review_content: '맛있네요.....'
            },
            {
                key: 6, user_name: 'user_6',
                review_grade: '9.8 / 10',
                review_content: '맛있네요.....asdafadsf...................................................................................................'
            },
            {
                key: 7, user_name: 'user_7',
                review_grade: '9.8 / 10',
                review_content: '맛있네요.....'
            },
            {
                key: 8, user_name: 'user_8',
                review_grade: '9.8 / 10',
                review_content: '맛있네요.....'
            },
        ]
    }

    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                <View style = {{alignItems:'center'}}>
                    <Text style={styles_review.restaurant_name}>
                        {navigation.getParam('restName', 'NO-NAME')}
                    </Text>
                </View>
                <View style = {styles_review.section_header_container}>
                    <Text style={styles_review.section_header}>Grade</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text id="Shop_Grade">9.8/10</Text>
                </View>
                <View style = {styles_review.section_header_container}>
                    <Text style={styles_review.section_header}>Menus</Text>
                </View>
                <View>
                    <MenuListview
                        itemList={this.getMenus()}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style = {styles_review.section_header_container}>
                        <Text style={styles_review.section_header}>Reviews</Text>
                    </View>
                    <TouchableOpacity style = {styles_review.write_btn}
                        onPress={() => this.props.navigation.navigate('Writing_Review')}>
                        <Text style = {styles_review.write_btn_text}>
                            Remain your review
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <ReviewListview
                        itemList={this.getReviews()}
                    />
                </View>
            </ScrollView>
        );
    }
}


const styles_review = StyleSheet.create({
    Menu_Container: {
        marginLeft: 5,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 20,
        borderRightWidth:1,
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    Review_Container: {
        marginLeft: 5,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'black',
    },
    restaurant_name: {
        fontSize: 40,
        borderBottomWidth:1,
        borderColor : 'black',
    },
    section_header_container: {
        borderLeftWidth: 2,
        borderColor: '#ff2424',
        marginLeft: 5,
        marginTop:10,
    },
    section_header: {
        margin: 5,
        fontSize: 20,
    },
    write_btn:{
        marginLeft : 130,
        marginTop : 20,
        borderRadius:30,
        backgroundColor:'#ff2424',
        width: 180,
        alignItems:'center',
    },
    write_btn_text:{
        fontSize:15,
        color: '#FFFFFF'
    }
});