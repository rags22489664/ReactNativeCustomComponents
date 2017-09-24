import React, { PureComponent } from 'react';
import { TextInput as TextInputRN, View, StyleSheet } from 'react-native';
import Style, { Colors } from './style';
import _ from 'lodash';

TextInputRN.defaultProps = {
    underlineColorAndroid: Colors.transparent
};

export default class TextInput extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            style: {}
        };
    }

    render = () => {
        return (
            <View style={[styles.view, this.props.style, this.state.style]}>
                <TextInputRN {...this.props} ref="input" onChangeText={this.onChangeText} style={styles.input} />
            </View>
        );
    }

    onChangeText = (value) => {
        value = _.trim(value);
        this.onChangeTextValidate(value);
        this.onChangeTextPropogate(value);
    }

    onChangeTextValidate = (value) => {
        if (this.props.required) {
            let style;
            if (_.isEmpty(value)) {
                style = styles.invalid;
            } else {
                style = styles.valid;
            }
            this.setState({ style: style });
        }
    }

    onChangeTextPropogate = (value) => {
        this.props.onChangeText && this.props.onChangeText(value);
    }

    clear = () => {
        this.refs.input.clear();
        this.onChangeTextPropogate("");
        this.focus();
    }

    focus = () => {
        this.refs.input.focus();
    }

    validate = () => {
        console.log(this.refs.input);
    }

}

const styles = {
    view: {
        borderWidth: 1,
        borderColor: Colors.gray
    },
    invalid: {
        borderColor: Colors.red
    },
    valid: {
        borderColor: Colors.green
    },
    input: {
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 5,
        paddingRight: 5,
    }
};

styles = StyleSheet.create(Style.scale(styles));