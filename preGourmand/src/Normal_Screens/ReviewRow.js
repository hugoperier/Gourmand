import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Review_Container:{
        marginLeft : 5,
        marginRight: 20,
        marginBottom : 20,
        marginTop : 20,
        borderWidth : 1,
        borderColor : 'black'
    }
});

const ReviewRow = ({ user_name, review_grade, review_content }) => (
    <View style={styles.Review_Container}>
        <View style={{ flexDirection: 'row' }}>
            <View>
                <Text>
                    {user_name}
                </Text>
            </View>
            <View>
                <Text>
                    {review_grade}
                </Text>
            </View>
        </View>
        <View>
            <Text>
                {review_content}
            </Text>
        </View>
    </View>
);

export default ReviewRow;