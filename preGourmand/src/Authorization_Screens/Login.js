import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image
} from 'react-native';

export default class Login extends Component {

    render() {
        return (
            <View style={styles_Login.Container}>
                <Image
                    style={{ resizeMode: 'center', height: 250, margin: 20 }}
                    source={require('D:\\preGourmand\\src\\image\\logo.png')}
                />

                <TextInput style={styles_Login.InputBox} placeholder="E-Mail" />
                <TextInput style={styles_Login.InputBox} placeholder="Password" />

                <TouchableOpacity style={styles_Login.red_btn}>
                    <Text style={styles_Login.red_btn_Text}>Gourmand Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles_Login.txt_btn}
                    onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles_Login.txt_btn_Text}>Join</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles_Login.txt_btn}
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles_Login.txt_btn_Text}>Go to Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles_Login = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
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