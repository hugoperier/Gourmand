import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Menu_Container : {
        marginLeft : 5,
        marginRight: 20,
        marginBottom : 20,
        marginTop : 20,
        borderWidth : 1,
        borderColor : 'black'
    },
    menu_name: {
        fontSize: 16,
        color: '#000',
    },
    menu_price: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
});

const MenuRow = ({image_url,menu_name,menu_price}) => (
    <View style={styles.Menu_Container}>
        {/* <Image source = {{ uri : image_url}} style = {styles.photo}/> */}
        <View >
            <Text style = {styles.menu_name}>
                {menu_name}
            </Text>
        </View>
        <View >
            <Text style = {styles.menu_price}>
                {menu_price}
            </Text>
        </View>
    </View>
);

export default MenuRow;