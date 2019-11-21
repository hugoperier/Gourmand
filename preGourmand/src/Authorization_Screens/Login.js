import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';

export default class Login extends Component {

    render() {
        return (
            <View style={styles_Login.Container}>
                <Text> Gourmand </Text>
                <View style={styles_Login.login_container}>
                    <View style={styles_Login.userInfoContainer}>
                        <Text>E-Mail</Text>
                        <TextInput placeholder="E-Mail" />
                    </View>
                    <View style={styles_Login.userInfoContainer}>
                        <Text>Password</Text>
                        <TextInput placeholder="Password" />
                    </View>
                    <TouchableOpacity>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles_Login.button_Container}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Text>Home으로</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>회원가입</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles_Login = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    login_container: {
        borderColor: 'black',
        borderWidth: 1
    },
    userInfoContainer: {
        borderColor: 'black',
        borderWidth: 1
    },
    button_Container: {
        flexDirection: 'row'
    }
});