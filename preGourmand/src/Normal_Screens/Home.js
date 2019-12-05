import React, {Component} from 'react';
import{
    View,
    Text,
    Button,
    TouchableOpacity,
} from 'react-native';

export default class Home extends Component{

    callRestaurantName(){
        return '씨티팝';
    }

    render(){
        return (
            <View>
                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate('Maps')}
                    >
                        <Text>Go Maps</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate('Details', {restName : this.callRestaurantName()})}
                    >
                        <Text>Go Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate('Login')}
                    >
                        <Text>Go Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate('Register')}
                    >
                        <Text>Go Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate('AuthLoading')}
                    >
                        <Text>Go AuthLoading</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}