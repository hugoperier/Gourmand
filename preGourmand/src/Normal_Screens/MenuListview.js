import React from 'react';

import { View, ListView, FlatList, StyleSheet, Text } from 'react-native';
import MenuRow from './MenuRow';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const MenuListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
            horizontal = {true}
            data={itemList}
            renderItem={({ item }) => <MenuRow
                image_url={item.image_url}
                menu_name={item.menu_name}
                menu_price={item.menu_price}
            />}
        />
    </View>
);

export default MenuListview;