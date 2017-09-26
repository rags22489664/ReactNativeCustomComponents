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
      time: new Date().toUTCString()
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({ time: new Date().toUTCString() });
    }, 1000);
  }

  render() {
    let header = (<View style={styles.customHeader}><Text mono style={styles.customHeaderText}>This is a custom header</Text></View>);
    let body = (<View><Text>This is the card body</Text></View>);
    let footer = (<View><Text>This is the card footer</Text></View>);
    return (
      <View>
        {/* <Text style={styles.text}>{this.state.time}</Text>
        <TextInput ref="input" style={styles.input} required clear password />
        <Button onPress={this.onPress} text="Click me" icon={Icons.cross} disabled={false} style={styles.button} color={Colors.green} textColor={Colors.white} />
        <BorderedButton onPress={this.onPress} text="Click me" icon={Icons.cross} disabled={false} style={styles.button} color={Colors.red} />
        <CircularButton onPress={this.onPress} text="Click me" icon={Icons.cross} disabled={false} style={styles.button} color={Colors.red} iconColor={Colors.white} />
        <IconButton onPress={this.onPress} text="Click me" icon={Icons.cross} disabled={false} style={styles.button} color={Colors.red} /> */}
        <Card style={styles.card} title="Tasks" icon={Icons.eyeOpen} body={body} footer={footer} />
        <Card style={styles.card} header={header} body={body} footer={footer} />
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
  },
  card: {
    margin: 20
  },
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  customHeaderText: {
    color: Colors.red
  }
};

styles = StyleSheet.create(Style.scale(styles));

AppRegistry.registerComponent('ReactNativeCustomComponents', () => ReactNativeCustomComponents);
