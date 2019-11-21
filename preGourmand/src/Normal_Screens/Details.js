import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
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
                review_content: '맛있네요.....'
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
                <View >
                    <Text id="Shop_Head">
                        {/* {JSON.stringify(navigation.getParam('restName', 'NO-NAME'))} */}
                        {navigation.getParam('restName', 'NO-NAME')}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Grade</Text>
                    <Text id="Shop_Grade">9.8/10</Text>
                </View>
                <Text>Menus</Text>
                <View>
                    <MenuListview
                        itemList={this.getMenus()}
                    />
                </View>
                <View  style = {{flexDirection : 'row'}}>
                    <Text>Reviews</Text>
                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate('Writing_Review')}>
                        <Text>
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


const styles = StyleSheet.create({
    Menu_Container: {
        marginLeft: 5,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'black'
    },
    Review_Container: {
        marginLeft: 5,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'black'
    }
});