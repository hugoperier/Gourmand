import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default class Register extends Component {

    render() {
        return (
            <View style={{ alignItems: "center" }}>
                <View>
                    <Text> Gourmand </Text>
                </View>
                <View style={styles_Register.register_container}>
                    <View style={styles_Register.userInfoContainer}>
                        <Text>E-Mail</Text>
                        <TextInput placeholder="E-Mail" />
                    </View>
                    <View style={styles_Register.userInfoContainer}>
                        <Text>Password</Text>
                        <TextInput placeholder="Password" />
                    </View>
                    <TouchableOpacity>
                        <Text>Send Korea E-mail</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>회원가입 완료</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Text>Home으로</Text>
                    </TouchableOpacity>
                </View>
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
        borderColor: 'black',
        borderWidth: 1
    },
    userInfoContainer: {
        borderColor: 'black',
        borderWidth: 1
    },
    button_Container: {
        flexDirection: 'column'
    }
});