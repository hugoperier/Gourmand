import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Menu_Container : {
        height:100,
        width:100,
        marginLeft : 10,
        marginRight: 20,
        marginBottom : 20,
        marginTop : 20,
       
    },
    menu_name: {
        fontSize: 16,
        color: '#000',
    },
    menu_price: {
        fontSize: 11,
        fontStyle: 'italic',
        marginLeft: 30,
    },
    photo_container:{
        borderRightWidth:1,
        borderBottomWidth: 1,
        borderColor: '#adadad',
        alignItems:"center",
    },
    photo: {
        height: 50,
        width: 50,
    },
});

const MenuRow = ({image_url,menu_name,menu_price}) => (
    <View style={styles.Menu_Container}>
        <View style = {styles.photo_container}>
            <Image 
                source = {require('D:\\preGourmand\\src\\image\\food_icon1.png')} 
                style = {styles.photo}/>
        </View>
        <View style = {{alignItems:"flex-start" , marginTop : 5}}>
            <Text style = {styles.menu_name}>
                {menu_name}
            </Text>
        </View>
        <View style = {{alignItems:'flex-end' , marginTop : 5}}>
            <Text style = {styles.menu_price}>
                {menu_price}
            </Text>
        </View>
    </View>
);

export default MenuRow;