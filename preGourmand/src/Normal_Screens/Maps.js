import React, {Component} from 'react';

import {WebView} from 'react-native-webview';

export default class Maps extends Component{
    render(){
        return(
            <WebView
                    source = {{uri: 'https://map.kakao.com/'}}
                    style = {{ marginTop:20}}
                />
        );
    }
}