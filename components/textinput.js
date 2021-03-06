import React, { PureComponent } from 'react';
import { TextInput as TextInputRN, View, StyleSheet } from 'react-native';
import Style, { Colors } from './style';
import { IconButton } from './button';
import { Icons } from './icon';
import _ from 'lodash';

TextInputRN.defaultProps = {
    underlineColorAndroid: Colors.transparent
};

export default class TextInput extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            style: {},
            secured: this.props.password ? true : false
        };
        this.value = null;
    }

    render = () => {
        return (
            <View style={[styles.view, this.props.style, this.state.style]}>
                <TextInputRN {...this.props} ref="input" onChangeText={this.onChangeText} style={styles.input} secureTextEntry={this.state.secured} />
                {this.props.clear && <IconButton icon={Icons.cross} style={styles.icon} onPress={this.clear} />}
                {this.props.password && <IconButton icon={this.state.secured ? Icons.eyeOpen : Icons.eyeClose} style={styles.icon} onPress={this.toggleSecured} />}
                {this.props.icon && <IconButton icon={this.props.icon} style={styles.icon} onPress={this.props.iconClick} />}
            </View>
        );
    }

    onChangeText = (value) => {
        this.value = _.trim(value);
        this.onChangeTextValidate(this.value);
        this.onChangeTextPropogate(this.value);
    }

    onChangeTextValidate = (value) => {
        if (this.props.required) {
            let style;
            if (_.isEmpty(value)) {
                style = styles.invalid;
                this.focus();
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
        this.onChangeText("");
        this.focus();
    }

    focus = () => {
        this.refs.input.focus();
    }

    validate = () => {
        this.onChangeText(this.value);
    }

    toggleSecured = () => {
        this.setState({ secured: !this.state.secured });
    }

}

const styles = {
    view: {
        elevation: 2,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center'
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
        flex: 1
    },
    icon: {
        padding: 3
    }
};

styles = StyleSheet.create(Style.scale(styles));