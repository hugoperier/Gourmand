import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native'

export default class Register extends Component {

    render() {
        return (
            <View style={{ alignItems: "center" }}>
                <Image
                    style={{marginTop : 60, marginBottom : 60}}
                    source={require('D:\\preGourmand\\src\\image\\Register_Header.png')} />



                <Text style = {{marginRight: 270 ,fontSize: 30}}>E-Mail</Text>
                <TextInput style={styles_Register.InputBox} placeholder="E-Mail" />


                <Text style = {{marginRight: 250, fontSize:30}}>Password</Text>
                <TextInput style={styles_Register.InputBox} placeholder="Password" />

                <TouchableOpacity style={styles_Register.red_btn}>
                    <Text style={styles_Register.red_btn_Text}>Send Korea E-mail</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles_Register.red_btn}>
                    <Text style={styles_Register.red_btn_Text}>회원가입 완료</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles_Register.txt_btn}
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style = {styles_Register.txt_btn_Text}>Home으로</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles_Register = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    register_container: {

    },
    userInfoContainer: {

    },
    button_Container: {
        flexDirection: 'column'
    },
    InputBox: {
        width: '80%',
        height: 40,
        backgroundColor: '#bfbfbf',
        borderRadius: 30,
        marginBottom: 10,
        fontSize: 15
    },
    InputBox_Text: {
        marginTop: 10,
        fontSize: 20
    },
    red_btn: {
        width: '80%',
        height: 40,
        backgroundColor: '#ff2424',
        borderRadius: 30,
        alignItems: "center",
        marginTop: 20
    },
    red_btn_Text: {
        marginTop: 7,
        color: '#FFFFFF',
        fontSize: 20
    },
    txt_btn: {
        marginTop: 10,
    },
    txt_btn_Text: {
        fontSize: 20,
        fontStyle: "normal"
    }
});