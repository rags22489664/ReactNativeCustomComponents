import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import { Text, Style, TextInput, Icon, Icons } from './components/index';
import _ from 'lodash';

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
        <TextInput style={styles.input} required />
        <Icon icon={Icons.cross} style={styles.icon} />
      </View>
    );
  }
}

const styles = {
  text: {
    fontSize: 20,
    margin: 20
  },
  input: {
    margin: 20
  },
  icon: {
    fontSize: 20
  }
};

styles = StyleSheet.create(Style.scale(styles));

AppRegistry.registerComponent('ReactNativeCustomComponents', () => ReactNativeCustomComponents);
