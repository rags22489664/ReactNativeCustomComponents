import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import { Text, Style } from './components/index';

export default class ReactNativeCustomComponents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toUTCString()
    };
    setInterval(() => {
      this.setState({ time: new Date().toUTCString() });
    }, 1000);
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>{this.state.time}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(Style.scale({
  text: {
    fontSize: 20,
  }
}));

AppRegistry.registerComponent('ReactNativeCustomComponents', () => ReactNativeCustomComponents);
