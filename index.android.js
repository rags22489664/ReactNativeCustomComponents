import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ToastAndroid
} from 'react-native';

import { Text, Style, TextInput, Icon, Icons, Button, BorderedButton, CircularButton, IconButton, Colors } from './components/index';
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
        <TextInput ref="input" style={styles.input} required clear password/>
        <Button onPress={this.onPress} text="Click me" icon={Icons.cross} disabled={false} style={styles.button} color={Colors.green} textColor={Colors.white} />
        <BorderedButton onPress={this.onPress} text="Click me" icon={Icons.cross} disabled={false} style={styles.button} color={Colors.red} />
        <CircularButton onPress={this.onPress} text="Click me" icon={Icons.cross} disabled={false} style={styles.button} color={Colors.red} iconColor={Colors.white} />
        <IconButton onPress={this.onPress} text="Click me" icon={Icons.cross} disabled={false} style={styles.button} color={Colors.red}/>
      </View>
    );
  }

  onPress = () => {
    this.refs.input.validate();
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
  },
  button: {
    margin: 20
  }
};

styles = StyleSheet.create(Style.scale(styles));

AppRegistry.registerComponent('ReactNativeCustomComponents', () => ReactNativeCustomComponents);
