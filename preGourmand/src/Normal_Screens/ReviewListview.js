import React from 'react';

import { View, ListView, FlatList, StyleSheet, Text } from 'react-native';
import ReviewRow from './ReviewRow';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const ReviewListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
            data={itemList}
            renderItem={({ item }) => <ReviewRow
                user_name={item.user_name}
                review_grade = {item.review_grade}
                review_content={item.review_content}
            />}
        />
    </View>
);

export default ReviewListview;