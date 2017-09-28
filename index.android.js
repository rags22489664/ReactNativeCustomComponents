import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ToastAndroid
} from 'react-native';

import {
  Text,
  Style,
  TextInput,
  Icon,
  Icons,
  Button,
  BorderedButton,
  CircularButton,
  IconButton,
  Colors,
  Card
} from './components/index';
import _ from 'lodash';

export default class ReactNativeCustomComponents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount = () => {
    
  }

  render() {
    return (
      <View>
        
      </View>
    );
  }
}

const styles = {
  
};

styles = StyleSheet.create(Style.scale(styles));

AppRegistry.registerComponent('ReactNativeCustomComponents', () => ReactNativeCustomComponents);
